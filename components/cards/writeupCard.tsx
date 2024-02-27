'use client';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Writeup } from '@/app/lib/definitions';

export default function WriteupCard({ writeup }: { writeup: Writeup }) {
  return (
    <div className="border-b bottom-1 p-2 pb-6">
      <div className="flex flex-row flex-wrap justify-between h-full">
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 h-full">
          <div className="flex justify-center items-center">
            <ArrowTopRightIcon />
          </div>
          <div>
            <h4 className="font-medium bg-green-300 h-full">{writeup.title}</h4>
          </div>
        </div>
        <div className="text-gray-500 w-24 flex items-center justify-center bg-yellow-300">
          {writeup.date}
        </div>
      </div>
    </div>
  );
}
