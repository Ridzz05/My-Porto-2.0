# Portfolio Website

Portfolio website yang dibangun menggunakan Next.js 14, TypeScript, dan Tailwind CSS. Website ini menampilkan karya-karya dalam bidang Web Development, Mobile Apps, dan UI/UX Design.

## 🚀 Fitur

- **Responsive Design**: Tampilan yang optimal di desktop dan mobile
- **Modern UI**: Menggunakan Tailwind CSS dengan tema coklat yang elegan
- **Smooth Animations**: Menggunakan Framer Motion untuk animasi yang halus
- **Type Safety**: Menggunakan TypeScript untuk keamanan tipe data
- **Performance**: Optimized dengan Next.js 14
- **Sections**:
  - Hero Section
  - Project Showcase
  - Web Development
  - Mobile Apps
  - UI/UX Design
  - Contact Form

## 🛠️ Teknologi yang Digunakan

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Instalasi

1. Clone repository
```bash
git clone https://github.com/Ridzz05/My-Porto-2.0.git
```

2. Masuk ke direktori project
```bash
cd My-Porto-2.0
```

3. Install dependencies
```bash
npm install
```

4. Jalankan development server
```bash
npm run dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser

## 🚀 Deployment

### Cloudflare Pages

1. Fork repository ini
2. Buat project baru di Cloudflare Pages
3. Hubungkan dengan repository yang sudah di-fork
4. Pada pengaturan build:
   - Build command: `npm run build`
   - Build output directory: `out`
5. Di bagian Environment Variables, tambahkan:
   - `NODE_VERSION`: `18.x`
6. Di bagian Compatibility Flags, tambahkan:
   - `nodejs_compat`
7. Deploy!

## 🔧 Konfigurasi

- Font yang digunakan:
  - Montserrat untuk heading
  - Quicksand untuk body text
- Warna tema: 
  - Primary: #8B4513 (Brown)
  - Secondary: #723a0f (Dark Brown)
  - Background: #fdf6e3 (Light Beige)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Kontribusi

Silakan berkontribusi dengan membuat pull request atau melaporkan issues.

## 📄 Lisensi

[MIT License](LICENSE)

## 👤 Author

Muhammad Rizki Al Ghifari
- GitHub: [@Ridzz05](https://github.com/Ridzz05)
- Email: muhrizkialghipari@gmail.com

## Environment Setup

This project uses environment variables for configuration. To set up your local environment:

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the values in `.env` with your configuration:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
```

3. For Cloudflare Pages deployment:
   - Add these environment variables in your Cloudflare Pages dashboard
   - Go to Settings > Environment variables
   - Add all variables from `.env.example` with your values
   - Make sure to set them for both Production and Preview environments if needed

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```
