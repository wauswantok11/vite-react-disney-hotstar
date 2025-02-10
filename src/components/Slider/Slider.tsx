import { useEffect, useState, useRef } from "react";
import ApiMovieDB from "../../service/ApiMoviedb";
import { MovieDTO } from "../../service/MovieListDTO";
const IMAGE_URL = "https://image.tmdb.org/t/p/original";
import styles from "./Styles.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const screenWidth = window.innerWidth
function Slider() {
  const [movieList, setMovieList] = useState<MovieDTO[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getTrendingMovies = async () => {
    try {
      const response = await ApiMovieDB.fetchTrendingMovies();
      setMovieList(response.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error
    }
  };

  const sliderLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= screenWidth -210; // Move left
    }
  };

  const sliderRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += screenWidth -210; // Move right
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <> 
      <div className={styles.sliderContainer}>

        <div ref={sliderRef} className={styles.movieList}>
          <IoIosArrowBack className={styles.sliderLeft} onClick={sliderLeft} />
          {movieList.map((item) => (
            <img key={item.id} src={IMAGE_URL + item.backdrop_path} alt={item.name} />
          ))}
          <IoIosArrowForward className={styles.sliderRight} onClick={sliderRight} />
        </div>
      </div>
    </>
  );
}

export default Slider;
