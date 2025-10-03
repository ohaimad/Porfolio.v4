import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '../app/components/Navbar/nav';
import Cursor from "./components/Cursor/Cursor"
import { ReactNode } from 'react';

const plusJakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <Cursor />
        <Header />
        {children}
      </body>
    </html>
  )
}
