import axios from "axios";
const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTdhM2FjMjQ2NGY0MGMxNTZjZjhlNGQ3ZWYxZTQxYyIsIm5iZiI6MTczODk1Njc2NS42ODYsInN1YiI6IjY3YTY1ZmRkNGRjMDUyYmE1NTg1ZmIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V61YNzVK8wQN9-sAol1bWuI68aidX5WBam7OrO47u2w";
import { TrendingMoviesDTO } from "./MovieListDTO";
import { TrendingGenresDTO } from "./GennersListDTO"
import { DiscoverListDTO}from "./DiscoverListDTO"

const fetchTrendingMovies = async (): Promise<TrendingMoviesDTO> => {
  try {
    let url = API_URL + "/trending/all/day?language=en-US"
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: API_TOKEN,
      },
    }); 
    return response.data as TrendingMoviesDTO;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

const fetchGenreMovies =async ():  Promise<TrendingGenresDTO> => {
  try {
    let url = API_URL + "/genre/movie/list?language=en"
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: API_TOKEN,
      },
    }); 
    console.error("response.data:", response.data);
    return response.data as TrendingGenresDTO;
  } catch (error) {
    console.error("Error fetching genre movies:", error);
    throw error;
  }
};

const fetchMoviesListPoster = async (id : string): Promise<DiscoverListDTO> =>{
  try {
    let url = API_URL + "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=" + id
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: API_TOKEN,
      },
    }); 
    console.error("response.data:", response.data);
    return response.data as DiscoverListDTO;
  } catch (error) {
    console.error("Error fetching genre movies:", error);
    throw error;
  }
}

export default {
  fetchTrendingMovies,
  fetchGenreMovies,
  fetchMoviesListPoster,
};
