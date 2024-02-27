import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathName = usePathname();

  const links = [
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'projects',
      path: '/projects',
    },
    {
      name: 'writeups',
      path: '/writeups',
    },
  ];

  return (
    <div className="flex gap-3 text-gray-600">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${pathName == link.path ? 'underline' : ''} || ${
              pathName == '/' && link.path == '/about' ? 'underline' : ''
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
