import React, { useState, useEffect } from "react";
import service from "../../../service/ApiMoviedb";
import { DiscoverListDTO } from "../../../service/DiscoverListDTO";
// const ImageUrl = "https://image.tmdb.org/t/p/original";
import styles from "./MovieList.module.scss";
interface MovieListProps {
  genreID: string;
}

const MovieList: React.FC<MovieListProps> = ({ genreID }) => {
  const [movies, setMovies] = useState<DiscoverListDTO>();
  const getPosterListById = async (id: string) => {
    try {
      const response = await service.fetchMoviesListPoster(id);
      setMovies(response);
    } catch (err) {
      console.log("Error fetching movies:", err);
    }
  };
  useEffect(() => {
    getPosterListById(genreID);
  }, []);
  return (
    <>
      <div className={styles.MoviePosterList}>
        {movies?.results?.map((item) => (
          <div className={styles.MoviePosterItem}>
            <img src={"https://image.tmdb.org/t/p/original" + item.backdrop_path} alt={item.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
