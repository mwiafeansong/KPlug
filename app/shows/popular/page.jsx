import Popular from '@/components/Popular';
import { fetchPageData } from '@/utils/requests';
import { popularShowsLink } from '@/utils/requestLinks';

const PopularShows = async () => {
  const data = await fetchPageData(popularShowsLink, 1);

  return <Popular mediaType="shows" popularMedia={data.results} />;
};

export default PopularShows;
