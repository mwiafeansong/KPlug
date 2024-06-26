import TopRated from '@/components/TopRated';
import { fetchPageData } from '@/utils/requests';
import { topRatedMoviesLink } from '@/utils/requestLinks';
import { notFound } from 'next/navigation';

const TopRatedMovies = async ({ searchParams }) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const data = await fetchPageData(topRatedMoviesLink, page);

  if (page > data.totalPages) {
    return notFound();
  }

  return (
    <TopRated
      mediaType="movies"
      topRatedMedia={data.results}
      title="top-rated"
      page={page}
      numPages={data.totalPages}
    />
  );
};

export default TopRatedMovies;
