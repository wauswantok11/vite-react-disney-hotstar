
export interface MovieDTO {
  backdrop_path: string | null;
  id: number;
  name: string; 
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface TrendingMoviesDTO {
  page: number;
  results: MovieDTO[];
  total_pages: number;
  total_results: number;
}