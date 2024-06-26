import Image from 'next/image';
import Paginate from './shows/Paginate';
import Link from 'next/link';
import { baseImageUrlWithWidth } from '@/utils/constants';

const Popular = ({ popularMedia, mediaType }) => {
  return (
    <section className="w-[90%] m-auto lg:w-[90%]">
      <div className="pt-28 mb-10">
        <h2 className="text-2xl text-navyBlue font-bold sm:text-4xl">
          Popular {mediaType[0].toUpperCase() + mediaType.substring(1)}
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10">
        {popularMedia.map((media) => {
          if (media.id)
            return (
              <div key={media.id} className="">
                <Link href={`/${mediaType}/${media.id}`}>
                  <div className="relative h-40 min-w-[200px] cursor-pointer transition duration-200 ease-out group/poster">
                    <div className="hidden absolute top-0 bottom-0 right-0 left-0 z-10 bg-black/50 group-hover/poster:flex flex-col justify-center items-center rounded-md">
                      <p className="text-sm text-center">
                        {media.name || media.title}
                      </p>
                      <div className="font-bold w-1/2 h-[1px] my-1 bg-white"></div>
                      <p className="block">
                        {media?.first_air_date?.slice(0, 4) ||
                          media?.release_date?.slice(0, 4)}
                      </p>
                    </div>
                    <Image
                      src={
                        media.backdrop_path || media.poster_path
                          ? `${baseImageUrlWithWidth}${
                              media.backdrop_path || media.poster_path
                            }`
                          : '/movie.png'
                      }
                      fill={true}
                      alt="poster"
                      className="rounded-md object-cover"
                    />
                  </div>
                  <p className="text-center font-semibold mt-2">
                    {media.name || media.title}
                  </p>
                </Link>
              </div>
            );
        })}
      </div>
    </section>
  );
};

export default Popular;
