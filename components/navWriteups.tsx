import Link from 'next/link';

import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function NavWriteup() {
  return (
    <div className="mb-5 ">
      <Link href="/writeups" className="text-gray-600">
        <ArrowLeftIcon />
      </Link>
    </div>
  );
}
