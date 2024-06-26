'use client';
import { baseUrl } from '@/utils/constants';
import Image from 'next/image';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Thumbnail from './Thumbnail';
import { useRef, useState } from 'react';

const Category = ({ genre, genreShows }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <div className="w-[95vw] m-auto">
      <h3 className="text-lg font-semibold">{genre}</h3>
      <div className="relative group">
        <FaAngleLeft
          onClick={() => handleClick('left')}
          className={`absolute top-0 bottom-0 m-auto z-40 w-9 h-9 opacity-0 group-hover:opacity-100 cursor-pointer ${
            !isMoved && 'hidden'
          }`}
        />
        <div
          ref={rowRef}
          className="flex space-x-2 overflow-x-scroll scrollbar-hide"
        >
          {genreShows.map((show) => {
            return <Thumbnail key={show.id} show={show} />;
          })}
        </div>
        <FaAngleRight
          onClick={() => handleClick('right')}
          className="absolute top-0 bottom-0 right-0 z-40 m-auto w-9 h-9 opacity-0 group-hover:opacity-100 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Category;
