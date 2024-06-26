'use client';
import { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden relative items-center md:flex">
        <button className="absolute left-2">
          <FaSearch />
        </button>
        <form>
          <input
            className="bg-transparent border border-white rounded-full py-1 px-2 pl-6"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>

      {/* Mobile
      <div className="relative items-center sm:hidden">
        <button
          className="absolute right-2"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <FaSearch />
        </button>

        {isFormVisible && (
          <form>
            <input
              className="bg-transparent border border-white rounded-full py-1 px-2 pl-6"
              type="text"
              placeholder="Search"
            />
          </form>
        )}
      </div> */}
    </>
  );
};

export default Searchbar;
