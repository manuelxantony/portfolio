import { Inter } from 'next/font/google';

import DynamicHeader from '@/components/DynamicHeader';

const inter = Inter({ subsets: ['latin'] });

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
          </div>
        </div>
      </body>
    </html>
  );
}
