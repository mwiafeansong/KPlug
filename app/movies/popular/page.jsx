import Popular from '@/components/Popular';
import { fetchPageData } from '@/utils/requests';
import { popularMoviesLink } from '@/utils/requestLinks';
import { fetchPopularPerPage } from '@/utils/requests';
import { notFound } from 'next/navigation';
import useR from 'next/navigation';

const PopularMovies = async () => {
  const data = await fetchPageData(popularMoviesLink, 1);

  return <Popular mediaType="movies" popularMedia={data.results} />;
};

export default PopularMovies;
