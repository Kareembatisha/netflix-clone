import requests from "../api/Requests";

export const pageInfo = [
  {
    title: "Netflix Originals",
    fetchUrl: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  {
    title: "ActionMovies",
    fetchUrl: requests.fetchActionMovies,
    isLargeRow: true,
  },
  {
    title: "ComedyMovies",
    fetchUrl: requests.fetchComedyMovies,
    isLargeRow: true,
  },
  {
    title: "Documentaries",
    fetchUrl: requests.fetchDocumentaries,
    isLargeRow: true,
  },
  {
    title: "TopRated",
    fetchUrl: requests.fetchTopRated,
    isLargeRow: false,
  },
  // {
  //   title: "HorrorMovies",
  //   fetchUrl: requests.fetchRomancyMovies,
  //   isLargeRow: false,
  // },
  // {
  //   title: "RomancyMovies",
  //   fetchUrl: requests.fetchRomancyMovies,
  //   isLargeRow: false,
  // },
  // {
  //   title: "Trending",
  //   fetchUrl: requests.fetchTrending,
  //   isLargeRow: false,
  // },
];
