'use client';

import Socials from '@/components/socials';
import Nav from '@/components/nav';

export default function Header() {
  return (
    <header className="mt-10">
      <div className="flex justify-between ">
        <h3 className="pr-5 font-bold">manuel antony</h3>
        <Socials />
      </div>
      <div className="flex justify-end mt-10">
        <Nav />
      </div>
    </header>
  );
}
