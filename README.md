# 🎨 Portfolio  - Interactive Creative Showcase

A cutting-edge portfolio website built with Next.js, featuring immersive 3D experiences, cinematic video galleries, and fluid animations. This project showcases modern web development techniques with optimized performance and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

## ✨ Features

### 🌍 **3D Interactive Earth Component**
- Powered by Spline 3D scenes
- Smooth scroll integration
- Custom cursor interactions
- TypeScript interfaces for type safety

### 🎬 **Cinematics Video Gallery**
- Optimized video playback (H.264 compression)
- Touch-friendly navigation with swipe gestures
- Intersection Observer animations
- Modal video player with smooth transitions

### 🎯 **Custom Cursor System**
- GSAP-powered animations
- Hover state detection
- Smooth position tracking
- Blend mode effects

### 📱 **Responsive Design**
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch gesture support
- Optimized performance across devices

### 🚀 **Performance Optimizations**
- Video compression (50-75% size reduction)
- Lazy loading with Intersection Observer
- Font optimization with \`next/font\`
- Turbopack for fast development builds

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.6 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP with SplitText
- **3D Graphics:** Spline (@splinetool/react-spline)
- **Video Processing:** FFmpeg (H.264/libx264)
- **Development:** Turbopack, ESLint

## 🎥 Asset Optimization

All video assets have been compressed for optimal web performance:

| Video | Original Size | Optimized Size | Reduction |
|-------|---------------|----------------|-----------|
| Antichabta.mp4 | 118MB | 54MB | 54% |
| Biri.mp4 | 117MB | 50MB | 57% |
| Odyseyy.mp4 | 243MB | 63MB | 74% |
| Inception.mp4 | 33MB | 33MB | Already optimized |

**Compression Settings:**
- Codec: H.264/libx264
- CRF: 28-32 (Constant Rate Factor)
- Audio: AAC, 128kbps
- Optimization: Fast start for web streaming

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/ohaimad/Porfolio.v4.git
   cd Porfolio.v4
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About/          # About section with animations
│   │   │   ├── Cinematics/     # Video gallery component
│   │   │   ├── Cursor/         # Custom cursor system
│   │   │   ├── Earth/          # 3D Spline integration
│   │   │   ├── Navbar/         # Navigation components
│   │   │   ├── Preloader/      # Loading animations
│   │   │   ├── Projects/       # Project showcase
│   │   │   └── Title/          # Hero section
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── fonts/                  # Custom font files
│   ├── images/                 # Image assets
│   └── videos/                 # Optimized video files
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── tsconfig.json               # TypeScript configuration
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the incredible framework
- **Spline** for 3D scene capabilities  
- **GSAP** for smooth animations
- **Tailwind CSS** for utility-first styling
- **FFmpeg** for video optimization

## 📧 Contact

**Otmane Haimad** - [@ohaimad](https://github.com/ohaimad)

Project Link: [https://github.com/ohaimad/Porfolio.v4](https://github.com/ohaimad/Porfolio.v4)

---

⭐ **Star this repository if you found it helpful/Users/otmanehaimad/Desktop/Porfolio.v4* ⭐
