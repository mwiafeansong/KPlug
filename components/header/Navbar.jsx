'use client';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import { navlinks } from '@/utils/navlinks';

const Navbar = () => {
  return (
    <ul className="hidden gap-4 md:flex md:relative">
      {navlinks.map((link) => (
        <li key={link.name} className="relative group">
          <div className="flex space-x-2 border border-white py-1 px-3 rounded-full cursor-pointer">
            <p>{link.name}</p>
            <button>
              <FaCaretDown />
            </button>
          </div>

          {/* Dropdown */}
          <div className="absolute hidden group-hover:flex flex-col bg-white text-navyBlue w-full p-2 gap-2 rounded-md">
            {link.links.map((head) => (
              <Link
                key={head.title}
                href={`${head.href}`}
                className="hover:text-gold"
              >
                {head.title}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
