export const getFilmData = (films) => {
  return films.results.map(film => film.opening_crawl);
}