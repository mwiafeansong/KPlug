import TopRated from '@/components/TopRated';
import Upcoming from '@/components/Upcoming';
import { fetchPageData } from '@/utils/requests';
import { upcomingMoviesLink } from '@/utils/requestLinks';
import { notFound } from 'next/navigation';
import useR from 'next/navigation';

const upcomingShows = async ({ searchParams }) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const data = await fetchPageData(upcomingMoviesLink, page);

  if (page > data.totalPages) {
    return notFound();
  }

  return (
    <Upcoming
      mediaType="movies"
      upcomingMedia={data.results.filter((show) =>
        /^[a-zA-Z.,!?'\s]+$/.test(show.name)
      )}
      title="upcoming"
      page={page}
      numPages={data.totalPages}
    />
  );
};

export default upcomingShows;
