'use client'

import { useState, useEffect, useCallback, memo } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

// Types
type NavItem = {
    name: string;
    path: string;
    hasDropdown?: boolean;
}

type DropdownItem = {
    name: string;
    path: string;
}

// Optimized scroll direction hook with debounce
const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [prevOffset, setPrevOffset] = useState(0);
    const [visible, setVisible] = useState(true);

    const toggleScrollDirection = useCallback(() => {
        let scrollY = window.scrollY;
        if (scrollY === 0) {
            setVisible(true);
            return;
        }
        if (Math.abs(scrollY - prevOffset) < 10) {
            return;
        }
        const newScrollDirection = scrollY > prevOffset ? "down" : "up";

        if (newScrollDirection !== scrollDirection) {
            setVisible(newScrollDirection === "up");
        }

        setPrevOffset(scrollY);
    }, [prevOffset, scrollDirection]);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(toggleScrollDirection, 10);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, [toggleScrollDirection]);

    return visible;
};

// Memoized navigation data
const navItems: NavItem[] = [
    { name: 'Home', path: 'home' },
    { name: 'Project', path: 'project', hasDropdown: true },
    { name: 'Contacts', path: 'contacts' }
];

const dropdownItems: DropdownItem[] = [
    { name: 'Web Development', path: 'web-development' },
    { name: 'Mobile Apps', path: 'mobile-apps' },
    { name: 'UI/UX Design', path: 'design' }
];

// Memoized components
const MemoizedDropdownMenu = memo(({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => (
    <motion.div 
        className="absolute right-0 mt-2 w-52 rounded-xl bg-white/80 backdrop-blur-sm border border-[#8B4513]/10 shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
    >
        <div className="py-2">
            {dropdownItems.map((dropItem, dropIndex) => (
                <motion.div
                    key={dropIndex}
                    whileHover={{ backgroundColor: "#f5e6d3" }}
                    className="mx-1 rounded-lg overflow-hidden"
                >
                    <button 
                        className="block w-full text-left px-4 py-2 text-sm text-[#8B4513] font-quicksand hover:font-medium"
                        onClick={() => scrollToSection(dropItem.path)}
                    >
                        {dropItem.name}
                    </button>
                </motion.div>
            ))}
        </div>
    </motion.div>
));

const MemoizedDesktopMenu = memo(({ 
    isOpen, 
    setIsOpen, 
    scrollToSection 
}: { 
    isOpen: boolean; 
    setIsOpen: (value: boolean) => void; 
    scrollToSection: (sectionId: string) => void;
}) => (
    <div className="hidden md:block">
        <div className="ml-12 flex items-center space-x-4">
            {navItems.map((item, index) => (
                <div key={index} className="relative">
                    {item.hasDropdown ? (
                        <div>
                            <motion.button 
                                className="text-[#8B4513] hover:bg-[#f5e6d3] px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center"
                                onClick={() => setIsOpen(!isOpen)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </motion.button>
                            {isOpen && <MemoizedDropdownMenu scrollToSection={scrollToSection} />}
                        </div>
                    ) : (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button 
                                className="text-[#8B4513] hover:bg-[#f5e6d3] px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                                onClick={() => scrollToSection(item.path)}
                            >
                                {item.name}
                            </button>
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    </div>
));

const MemoizedMobileMenu = memo(({ 
    isOpen, 
    scrollToSection 
}: { 
    isOpen: boolean; 
    scrollToSection: (sectionId: string) => void;
}) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div 
                className="md:hidden mt-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
            >
                <div className="bg-white/80 backdrop-blur-sm border border-[#8B4513]/10 rounded-xl shadow-sm">
                    <div className="px-3 pt-1.5 pb-2 space-y-1 font-quicksand">
                        {navItems.map((item, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ backgroundColor: "#f5e6d3" }}
                                className="rounded-lg overflow-hidden"
                            >
                                <button 
                                    onClick={() => scrollToSection(item.path)}
                                    className="text-[#8B4513] block w-full px-4 py-2.5 text-sm font-semibold text-left"
                                >
                                    {item.name}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
));

const NavbarClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isVisible = useScrollDirection();
    const pathname = usePathname();

    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = element.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    }, []);

    return (
        <>
            <div className="h-20" />
            <AnimatePresence>
                {isVisible && (
                    <motion.nav 
                        className={`fixed w-full top-0 z-50 px-4 py-3 transition-all duration-300
                            ${pathname === '/home' ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent py-6'}`}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between h-14 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#8B4513]/10 shadow-sm px-8 my-1">
                                <motion.div 
                                    className="flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link 
                                        href="/"
                                        className="text-[#8B4513] text-xl font-bold font-montserrat"
                                    >
                                        Rizki
                                    </Link>
                                </motion.div>

                                <MemoizedDesktopMenu 
                                    isOpen={isOpen} 
                                    setIsOpen={setIsOpen} 
                                    scrollToSection={scrollToSection} 
                                />

                                <div className="md:hidden flex items-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-[#8B4513] hover:bg-[#f5e6d3] transition-colors duration-200"
                                    >
                                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                                    </motion.button>
                                </div>
                            </div>

                            <MemoizedMobileMenu isOpen={isOpen} scrollToSection={scrollToSection} />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavbarClient;
