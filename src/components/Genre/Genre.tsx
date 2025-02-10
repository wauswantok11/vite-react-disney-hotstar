import { useState, useEffect } from "react";
import ApiMovieDB from "../../service/ApiMoviedb";
import { GenreDTO } from "../../service/GennersListDTO";
import MovieList from "./MovieList/MovieList"
import styles from "./Genre.module.scss"
function Genre() {
  const [genreList, setGenreList] = useState<GenreDTO[]>([]);
  const getGenreMovies = async () => {
    try {
      const response = await ApiMovieDB.fetchGenreMovies();
      console.log("response.results", response);
      setGenreList(response.genres);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getGenreMovies();
  }, []);

  return (
    <>
      <div className={styles.GenreList}>
        {genreList.map(
          (item, index) =>
            index <= 4 && (
                <div className={styles.GenreItem}>
                    <h2> 
                      {item.name}  
                    </h2>
                    <MovieList genreID={String(item.id)} />
                </div> 
            )
        )}
      </div>
    </>
  );
}

export default Genre;
