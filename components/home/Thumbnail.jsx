'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { baseImageUrlWithWidth } from '@/utils/constants';
import Link from 'next/link';

const Thumbnail = ({ show }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [show.id]);

  return (
    <Link href={`/shows/${show.id}`}>
      <div className="relative h-28 min-w-[200px] cursor-pointer transition duration-200 ease-out md:hover:scale-105 md:min-w-[300px] md:h-40 group/poster">
        <div className="hidden absolute top-0 bottom-0 right-0 left-0 z-10 bg-black/50 group-hover/poster:flex justify-center items-center">
          <p className="text-sm">{show.name}</p>
        </div>
        <Image
          src={
            show.backdrop_path || show.poster_path
              ? `${baseImageUrlWithWidth}${
                  show.backdrop_path || show.poster_path
                }`
              : '/movie.png'
          }
          fill={true}
          priority={true}
          // style={{ objectFit: 'contain' }}
          alt="show poster"
        />
      </div>
    </Link>
  );
};

export default Thumbnail;
