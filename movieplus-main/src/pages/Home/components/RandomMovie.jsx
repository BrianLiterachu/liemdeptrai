import { Link, useNavigate } from "react-router-dom";
import styles from "./RandomMovie.module.css";
import { useFetch } from "../../../hooks/useFetch";

const urlRandomMovie = import.meta.env.VITE_API_RANDOM_MOVIE;
const urlImage = import.meta.env.VITE_API_IMAGE_BACKDROP;
const api = import.meta.env.VITE_API_CATEGORIES;
const urlCategories = `${api}list?api_key=`;
const index = Math.floor(Math.random() * 20);

export const RandomMovie = () => {
  const { data: categories } = useFetch(urlCategories);
  const { data: randomMovie } = useFetch(urlRandomMovie);
  const chosenMovie = randomMovie.length > 0 && randomMovie[index];
  const navigate = useNavigate();

  const movieDetails = randomMovie.length > 0 && {
    title: chosenMovie.title,
    id: chosenMovie.id,
    src: urlImage + chosenMovie.backdrop_path,
    description: chosenMovie.overview,
    year: String(chosenMovie.first_air_date).split("-")[0],
    categories: categories
      .filter((category) => chosenMovie?.genre_ids.includes(category.id))
      .map((item) => item.name)
      .join(" - "),
  };

  const handleClick = (id) => navigate(`/movie/${id}`)

  return (
    <div className={styles.random_movie}>
      {randomMovie.length > 0 && (
        <>
          <img
            src={movieDetails.src}
            alt="wallpaper"
            className={styles.wallpaper}
          />
          <div className={styles.container}>
            <div className={styles.details}>
              <span
                className={styles.title}
                onClick={() => {
                  handleClick(movieDetails.id);
                }}
              >
                {movieDetails.title}
              </span>
              <p className={styles.description}>{movieDetails.description}</p>
              <i className={styles.categories}>
                {movieDetails.categories} | {movieDetails.year}
              </i>
            </div>
          </div>
          <div className={styles.overlay_left}></div>
          <div className={styles.overlay_bottom}></div>
        </>
      )}
    </div>
  );
};
