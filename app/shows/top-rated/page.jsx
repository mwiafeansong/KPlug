import TopRated from '@/components/TopRated';
import { fetchPageData } from '@/utils/requests';
import { topRatedShowsLink } from '@/utils/requestLinks';
import { notFound } from 'next/navigation';

const TopRatedShows = async ({ searchParams }) => {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const data = await fetchPageData(topRatedShowsLink, page);

  if (page > data.totalPages) {
    return notFound();
  }

  return (
    <TopRated
      mediaType="shows"
      topRatedMedia={data.results}
      title="top-rated"
      page={page}
      numPages={data.totalPages}
    />
  );
};

export default TopRatedShows;
