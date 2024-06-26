'use client';
import Link from 'next/link';
import { FaBars, FaCross, FaSearch, FaWindowClose } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Logo from './Logo';
import Searchbar from './Searchbar';

const HeaderNav = ({ showSidebar }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathName]);

  return (
    <div
      className={`${
        pathName === '/'
          ? isScrolled
            ? 'bg-navyBlue'
            : 'bg-transparent'
          : 'bg-navyBlue'
      } fixed right-0 left-0 top-0 w-full z-20`}
    >
      <div className="flex justify-between items-center gap-3 p-5 relative">
        <Logo />
        <Searchbar />
        <Navbar />

        <div className="flex gap-4 md:hidden">
          <button className="" onClick={() => setIsFormVisible(!isFormVisible)}>
            <FaSearch size="20px" />
          </button>
          <button onClick={showSidebar}>
            <FaBars size="25px" />
          </button>
        </div>
      </div>
      {isFormVisible && (
        <form className="w-[90%] mx-auto">
          <input
            className="bg-transparent border border-white rounded-full w-full py-1 px-2"
            type="text"
            placeholder="Search"
          />
        </form>
      )}
    </div>
  );
};

export default HeaderNav;
