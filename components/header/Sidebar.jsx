'use client';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { navlinks } from '@/utils/navlinks';

const Sidebar = ({ isSidebarVisible, hideSidebar }) => {
  return (
    <aside
      className={`fixed w-3/4 h-screen bg-slate-400 z-20 md:hidden p-6 ${
        isSidebarVisible ? 'translate-x-[0%]' : 'translate-x-[-100%]'
      } transition duration-500`}
    >
      <button className="block mr-0 ml-auto mb-6" onClick={hideSidebar}>
        <FaTimes size="30px" />
      </button>
      <ul className="flex flex-col gap-6">
        {navlinks.map((link) => (
          <li key={link.name} className="">
            <details className="cursor-pointer">
              <summary>{link.name}</summary>
              <div className="flex flex-col pl-4 gap-2">
                {link.links.map((head) => (
                  <Link
                    key={head.title}
                    href={`${head.href}`}
                    className="hover:text-gold"
                    onClick={hideSidebar}
                  >
                    {head.title}
                  </Link>
                ))}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
