import { BASE_URL, API_KEY } from './constants';

//for trending, popular, top rated, upcoming tv shows and movies
export const fetchPageData = async (address, page) => {
  try {
    const url = new URL(address);
    url.searchParams.append('page', page);

    const payload = await fetch(url, {
      next: { revalidate: 24 * 60 * 60 },
    }).then((res) => res.json());

    return { results: payload.results, totalPages: payload.total_pages };
  } catch (error) {
    console.log(error);
  }
};

//for homepage genres data
export const fetchAllData = async (address) => {
  try {
    let results = [];
    let pageNum = 1;

    while (pageNum < 5) {
      const payload = await fetchPageData(address, pageNum);

      if (payload) {
        results.push(...payload.results);
      }
      pageNum += 1;
    }

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMediaTrailer = async (id, mediaType) => {
  try {
    const address = `${BASE_URL}/${mediaType}/${id}/videos?&api_key=${API_KEY}`;
    let trailer = '';

    const payload = await fetch(address, {
      next: { revalidate: 24 * 60 * 60 },
    }).then((res) => res.json());

    const index = payload.results.findIndex(
      (show) => show.type === 'Trailer' || show.type === 'Teaser'
    );

    if (index === -1) {
      return null;
    }

    trailer = `https://youtube.com/watch?v=${payload.results[index]?.key}`;
    return trailer;
  } catch (error) {
    console.log(error);
  }
};

//fetch show details for showid page
export const fetchMediaDetails = async (id, mediaType) => {
  try {
    const address = `${BASE_URL}/${mediaType}/${id}?language=en-US&api_key=${API_KEY}`;

    const payload = await fetch(address, {
      next: { revalidate: 24 * 60 * 60 },
    }).then((res) => res.json());

    return payload;
  } catch (error) {
    console.log(error);
  }
};

//fetch trending tv shows
const fetchPageTrendingShows = async (address, page) => {
  try {
    const url = new URL(address);
    url.searchParams.append('page', page);

    const payload = await fetch(url, {
      next: { revalidate: 24 * 60 * 60 },
    }).then((res) => res.json());

    if (!payload.results) return null;

    if (payload.results.length <= 0) return null;

    let koreanTrending = payload.results.filter(
      (show) =>
        (show.origin_country?.includes('KR') ||
          show.original_language === 'ko') &&
        show.adult === false
    );

    return { koreanTrending, page: payload.page };
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrendingShows = async (address) => {
  try {
    const korean = [];
    let payload;
    let pageNum = 1;

    do {
      payload = await fetchPageTrendingShows(address, pageNum);
      if (payload) {
        korean.push(...payload.koreanTrending);
      }
      pageNum++;
    } while (payload);

    const KoreanArrayUnique = [
      ...new Map(korean.map((show) => [show['id'], show])).values(),
    ];

    return KoreanArrayUnique;
  } catch (error) {
    console.log(error);
  }
};
