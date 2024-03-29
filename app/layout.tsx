import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import DynamicHeader from '@/components/DynamicHeader';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'manuel antony',
  description: 'portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex justify-center items-center">
          <div className="w-full md:w-[640px] p-3">
            <DynamicHeader />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
