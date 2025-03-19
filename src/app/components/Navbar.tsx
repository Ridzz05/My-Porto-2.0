'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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

// Client-side hook
const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [prevOffset, setPrevOffset] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const toggleScrollDirection = () => {
            let scrollY = window.scrollY;
            if (scrollY === 0) {
                setVisible(true);
            }
            if (Math.abs(scrollY - prevOffset) < 10) {
                return;
            }
            const newScrollDirection = scrollY > prevOffset ? "down" : "up";

            if (newScrollDirection !== scrollDirection) {
                setVisible(newScrollDirection === "up");
            }

            setPrevOffset(scrollY);
        };

        window.addEventListener("scroll", toggleScrollDirection);
        return () => {
            window.removeEventListener("scroll", toggleScrollDirection);
        };
    }, [scrollDirection, prevOffset]);

    return visible;
};

// Navigation data
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

const NavbarClient = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isVisible = useScrollDirection();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = element.offsetTop - 100;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className="h-20"></div>
            <AnimatePresence>
                {isVisible && (
                    <motion.nav 
                        className="fixed w-full top-0 z-50 px-4 py-3"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center justify-between h-14 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#8B4513]/10 shadow-sm px-8 my-1">
                                {/* Logo */}
                                <motion.div 
                                    className="flex-shrink-0"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button 
                                        className="text-[#8B4513] text-xl font-bold font-montserrat"
                                        onClick={() => scrollToSection('home')}
                                    >
                                        Portfolio
                                    </button>
                                </motion.div>

                                {/* Desktop Menu */}
                                <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} scrollToSection={scrollToSection} />

                                {/* Mobile Menu Button */}
                                <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                            </div>

                            {/* Mobile Menu */}
                            <MobileMenu isOpen={isOpen} scrollToSection={scrollToSection} />
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

const DesktopMenu = ({ 
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
                            {isOpen && <DropdownMenu scrollToSection={scrollToSection} />}
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
);

const DropdownMenu = ({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) => (
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
);

const MobileMenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (value: boolean) => void }) => (
    <motion.div 
        className="md:hidden flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-[#8B4513] hover:bg-[#f5e6d3] transition-colors duration-200"
        >
            <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
            >
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
    </motion.div>
);

const MobileMenu = ({ 
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
                            <div key={index}>
                                {item.hasDropdown ? (
                                    <>
                                        <motion.button 
                                            onClick={() => scrollToSection(item.path)}
                                            className="text-[#8B4513] hover:bg-[#f5e6d3] block w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-left transition-colors duration-200"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {item.name}
                                        </motion.button>
                                        <div className="pl-3">
                                            {dropdownItems.map((dropItem, dropIndex) => (
                                                <motion.div
                                                    key={dropIndex}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <button 
                                                        onClick={() => scrollToSection(dropItem.path)}
                                                        className="text-[#8B4513] hover:bg-[#f5e6d3] block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                                                    >
                                                        {dropItem.name}
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <button 
                                            onClick={() => scrollToSection(item.path)}
                                            className="text-[#8B4513] hover:bg-[#f5e6d3] block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200"
                                        >
                                            {item.name}
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

export default NavbarClient;
