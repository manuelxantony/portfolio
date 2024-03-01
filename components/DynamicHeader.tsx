'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/header';
import NavWriteup from './navWriteups';

export default function DynamicHeader() {
  const pathName = usePathname();

  return (
    <div>
      {pathName == '/' ||
      pathName == '/about' ||
      pathName == '/projects' ||
      pathName == '/writeups' ? (
        <Header />
      ) : (
        <NavWriteup />
      )}
    </div>
  );
}
