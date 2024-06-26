import { fetchTrendingShows } from '@/utils/requests';
import { trendingMoviesLink, trendingShowsLInk } from '@/utils/requestLinks';
import Trending from '@/components/Trending';

const TrendingMovies = async ({ searchParams }) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const perPage =
    typeof searchParams.per_page === 'string'
      ? Number(searchParams.per_page)
      : 20;
  const data = await fetchTrendingShows(trendingMoviesLink);

  const start = Number(page - 1) * Number(perPage);
  const end = start + Number(perPage);

  const entries = data.slice(start, end);

  return (
    <Trending
      trendingMedia={entries}
      mediaType="movies"
      title="trending"
      page={page}
      numPages={Math.ceil(data.length / 20)}
    />
  );
};

export default TrendingMovies;
