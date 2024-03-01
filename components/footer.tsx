import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-14 w-full ">
      <div className="w-full border-b border-1"></div>

      <div className="mt-14 flex justify-between items-center gap-1 text-sm text-gray-400 ">
        <div>
          <span>
            write me at{' '}
            <Link href={'mailto:manuelxantony@gmail.com'}>
              <span className="underline">manuelxantony@gmail.com</span>
            </Link>
          </span>
        </div>
        <div>
          <span>by </span>
          <Link href={'https://twitter.com/xmanuelxantony'}>
            <span className="underline">@manuelxantony </span>
          </Link>
          <span>2024</span>
        </div>
      </div>
    </footer>
  );
}
