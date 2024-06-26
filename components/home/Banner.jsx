import Image from 'next/image';
import { baseImageUrl } from '@/utils/constants';
import { FaInfoCircle, FaPlay } from 'react-icons/fa';
import Link from 'next/link';
import PlayButton from '../PlayButton';
import Modal from '../Modal';
import homeRequests from '@/utils/requests';
import { fetchMediaTrailer } from '@/utils/requests';

const Banner = async ({ netflixOrginals }) => {
  const show =
    netflixOrginals[Math.floor(Math.random() * netflixOrginals.length)];

  const trailer = await fetchMediaTrailer(show.id, 'tv');

  return (
    <div className="relative h-full">
      <div className="relative h-[95vh] w-full -z-10 mix-blend-multiply">
        <Image
          src={`${baseImageUrl}${show.backdrop_path || show.poster_path}`}
          fill={true}
          style={{ objectFit: 'cover' }}
          quality={100}
          priority={true}
          alt="banner"
        />
      </div>
      <div className="absolute bottom-1 flex flex-col space-y-4 pt-20 p-6 md:w-3/5">
        <h2 className="text-3xl font-bold">{show.name}</h2>
        <p>{show.overview}</p>
        <div className="flex items-center space-x-2">
          <PlayButton title="Play" />
          <Modal trailer={trailer} />
          <Link
            href={`/shows/${show.id}`}
            className="bannerbutton bg-slate-400/40 w-fit"
          >
            <FaInfoCircle />
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
