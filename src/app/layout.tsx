import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '../app/components/Navbar/nav';
import Cursor from "./components/Cursor/Cursor"
import { Analytics } from "@vercel/analytics/next"
import { ReactNode } from 'react';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Prefer a WebP favicon, but include a JPEG fallback for browsers that don't support WebP as a favicon */}
        <link rel="icon" href="/mee.webp" type="image/webp" />
        <link rel="icon" href="/images/fallback/mee.JPG" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/fallback/mee.JPG" />
      </head>
      <body className={plusJakarta.className}>
        <Analytics />
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  )
}
