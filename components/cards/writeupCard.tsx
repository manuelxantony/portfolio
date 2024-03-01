'use client';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Writeup } from '@/app/lib/definitions';
import Link from 'next/link';

export default function WriteupCard({ writeup }: { writeup: Writeup }) {
  return (
    <div className="border-b bottom-1 h-16 p-2">
      <Link
        href={writeup.link}
        className="flex flex-row flex-wrap justify-between h-full"
      >
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 h-full ">
          <div className="flex justify-center items-center">
            <ArrowTopRightIcon />
          </div>

          <h5 className="font-light">{writeup.title}</h5>
        </div>
        <div className="text-gray-500 w-24 flex items-center justify-center">
          {writeup.date}
        </div>
      </Link>
    </div>
  );
}
