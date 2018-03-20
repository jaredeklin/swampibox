export const getFilmData = (films) => {
  return films.results.reduce((filmData, episode) => {
    const filmObj = {
      title: episode.title,
      release: episode.release_date,
      openingCrawl: episode.opening_crawl,
    }

    return [...filmData, filmObj]
  }, [])  
}