import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/navbar/Header';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { ReactNode } from 'react';
import ToastProvider from '@/providers/ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next app',
  description: 'Next Application',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <ToastProvider>
              <div className='container'>
                <Header />
                <main>{children}</main>
                <Footer />
              </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
