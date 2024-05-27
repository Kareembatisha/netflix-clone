const API_KEY = "e4d1e39888d581584855ba97f2db051b";
const base_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${base_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${base_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomancyMovies: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// https://api.themoviedb.org/3/discover/tv?api_key=e4d1e39888d581584855ba97f2db051b&with_networks=213

export default requests;
