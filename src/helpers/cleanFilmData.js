export const cleanFilmData = (films) => {
  return films.results.reduce((filmData, episode) => {
    const filmObj = {
      title: episode.title,
      release: episode.release_date.slice(0, 4),
      openingCrawl: episode.opening_crawl
    };

    return [...filmData, filmObj];
  }, []);
};