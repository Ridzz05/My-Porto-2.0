export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tech: string[];
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "POS & Inventory System",
    description: "Aplikasi Point of Sale (POS) dan Inventory System untuk mengelola transaksi dan stok barang",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    category: "Web Development",
    tech: ["Laravel", "Livewire", "Tailwind CSS", "Inertia.js"],
    demoUrl: "https://github.com/Ridzz05/POS-DaisyUI-Livewire"
  },
  {
    id: 2,
    title: "Electronic Service Management System",
    description: "Aplikasi Electronic Service Management System untuk mengelola transaksi service elektronik dan stok barang",
    image: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=1200&auto=format&fit=crop",
    category: "Mobile Apps",
    tech: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://github.com/Ridzz05/Electronic-Service-Management"
  },
  {
    id: 3,
    title: "Catalog Website UI",
    description: "Website catalog untuk menampilkan produk dan informasi terkait",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    category: "UI/UX Design",
    tech: ["Figma", "Adobe XD", "Illustrator"],
    demoUrl: "https://macommerce.vercel.app/"
  },
  {
    id: 4,
    title: "Catalog Website UI",
    description: "Website catalog untuk menampilkan produk dan informasi terkait",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    category: "Web Development",
    tech: ["Figma", "Adobe XD", "Illustrator"],
    demoUrl: "https://macommerce.vercel.app/"
  }
]; 