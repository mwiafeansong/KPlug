import Banner from '@/components/home/Banner';
import { fetchAllData } from '@/utils/requests';
import Category from '@/components/home/Category';
import {
  actionShowsLink,
  comedyShowsLink,
  crimeShowsLink,
  dramaShowsLink,
  mysteryShowsLink,
  netflixOrginalsLink,
} from '@/utils/requestLinks';

export default async function Home() {
  const netflixOriginals = await fetch(netflixOrginalsLink).then((res) =>
    res.json()
  );

  const actionShows = await fetchAllData(actionShowsLink);
  const comedyShows = await fetchAllData(comedyShowsLink);
  const crimeShows = await fetchAllData(crimeShowsLink);
  const dramaShows = await fetchAllData(dramaShowsLink);
  const mysteryShows = await fetchAllData(mysteryShowsLink);

  return (
    <main className="relative">
      <Banner netflixOrginals={netflixOriginals.results} />
      <section className="w-[95%] m-auto space-y-5 pt-10">
        <Category genre="Action & Adventure" genreShows={actionShows} />
        <Category genre="Comedy" genreShows={comedyShows} />
        <Category genre="Crime" genreShows={crimeShows} />
        <Category genre="Drama" genreShows={dramaShows} />
        <Category genre="Mystery" genreShows={mysteryShows} />
      </section>
    </main>
  );
}
