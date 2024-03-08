import axios from "axios";

const movieUrl = "https://api.themoviedb.org/3/";
const apiKey = "2e017a69b0fe403cd43948d44137b908";
const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const getTrendingVideos = axios.get(
  movieUrl+"trending/all/day?api_key="+apiKey
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
