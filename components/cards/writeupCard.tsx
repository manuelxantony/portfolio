'use client';

import { ArrowTopRightIcon } from '@radix-ui/react-icons';

import { Writeup } from '@/app/lib/definitions';

export default function WriteupCard({ writeup }: { writeup: Writeup }) {
  return (
    <div className="border-b bottom-1 h-16 p-4">
      <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-row flex-wrap gap-4 ">
          <div className="flex justify-center items-center">
            <ArrowTopRightIcon />
          </div>
          <div>
            <h4 className="font-medium">{writeup.title}</h4>
          </div>
        </div>
        <div className="text-gray-500 w-24 bg-yellow-300">{writeup.date}</div>
      </div>
    </div>
  );
}
