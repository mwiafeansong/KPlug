import Image from 'next/image';
import {
  BASE_URL,
  API_KEY,
  baseImageUrlWithWidth,
  baseImageUrl,
} from '@/utils/constants';
import PlayButton from '@/components/PlayButton';
import Modal from '@/components/Modal';
import { fetchMediaDetails, fetchMediaTrailer } from '@/utils/requests';
import { notFound } from 'next/navigation';

const TvShow = async ({ params }) => {
  if (!/^-?\d+(\.\d+)?$/.test(params.movieid)) {
    return notFound();
  }

  const showDetails = await fetchMediaDetails(params.movieid, 'movie');
  const trailer = await fetchMediaTrailer(params.movieid, 'movie');

  return (
    <section>
      <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col pt-24 space-y-6 md:flex-row md:space-x-6 md-space-y-0">
        <div className="relative min-w-[90vw] h-[300px] rounded-lg md:min-w-[300px] md:h-[500px]">
          <Image
            src={`${baseImageUrl}${
              showDetails.backdrop_path || showDetails.poster_path
            }`}
            fill={true}
            priority={true}
            style={{ objectFit: 'cover', borderRadius: '10px' }}
            alt="poster"
          />
        </div>

        <div>
          <h2 className="font-semibold text-4xl text-center md:text-start">
            {showDetails.name || showDetails.title}&nbsp;
            <span>
              (
              {showDetails.release_date?.slice(0, 4) ||
                showDetails.first_air_date.slice(0, 4)}
              )
            </span>
          </h2>
          <div className="flex justify-center space-x-2 my-3 md:justify-start">
            {showDetails.genres.map((genre) => (
              <p
                key={genre.id}
                className="bg-navyBlue py-1 px-3 rounded-md md:rounded-full flex items-center"
              >
                {genre.name}
              </p>
            ))}
          </div>
          <div className="flex space-x-3 text-gold justify-center md:justify-start">
            <p>Rating: {showDetails.vote_average.toFixed(1)}/10</p>
          </div>
          <p className="mt-10 italic">{showDetails.tagline}</p>
          <div className="my-10">
            {showDetails.overview && (
              <>
                <h3 className="font-semibold text-xl">Overview</h3>
                <p>{showDetails.overview}</p>
              </>
            )}
          </div>
          {trailer && <PlayButton title="Watch Trailer" />}
          <Modal trailer={trailer} />
        </div>
      </div>
    </section>
  );
};

export default TvShow;
