'use client';

import { usePathname } from 'next/navigation';

import Header from '@/components/header';
import NavWriteup from './navWriteups';

export default function DynamicHeader() {
  const pathName = usePathname();
  console.log(pathName);

  return <div>{pathName == '/writeups' ? <Header /> : <NavWriteup />}</div>;
}
