import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import { useFetch } from "../../hooks/useFetch";
import { Recomendations } from "./components/Recomendations";
import { Overlay } from "../../components/GalleryMovies/components/Overlay/Overlay";

const api = import.meta.env.VITE_API;
const urlImageBackdrop = import.meta.env.VITE_API_IMAGE_BACKDROP;
const urlImagePoster = import.meta.env.VITE_API_IMAGE_POSTER;

export const Movie = () => {
  const { id } = useParams();
  const url = `${
    api + id
  }?&append_to_response=credits,videos,release_dates&api_key=`;

  const { data: movie } = useFetch(url, true);

  const movieDetails = movie.length > 0 && {
    title: movie[0].title,
    backdrop: urlImageBackdrop + movie[0].backdrop_path,
    poster: urlImagePoster + movie[0].poster_path,
    rating: Number(movie[0].vote_average).toFixed(1),
    description: movie[0].overview,
    year: String(movie[0].release_date).split("-")[0],
    categories: movie[0].genres.map((category) => category.name).join(" - "),
    key: movie[0]?.videos?.results?.find(
      (video) => video.name === "Official Trailer"
    )?.key,
  };

  return (
    <>
      {movie.length > 0 && (
        <>
          <div className={styles.movie}>
            <img
              src={movieDetails.backdrop}
              alt={`wallpaper ${movieDetails.title}`}
              className={styles.wallpaper}
            />
            <div className={styles.container}>
              <div className={styles.details}>
                <img
                  src={movieDetails.poster}
                  alt={movieDetails.title}
                  className={styles.poster}
                />
                <div className={styles.info}>
                  <span className={styles.title}>{movieDetails.title}</span>
                  <div className={styles.rating}>
                    <svg
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9999 27.3442L25.5708 31.3183C26.7741 32.0467 28.2466 30.97 27.9299 29.6083L26.1883 22.135L31.9991 17.1C33.0599 16.1817 32.4899 14.44 31.0966 14.3292L23.4491 13.68L20.4566 6.61833C19.9183 5.33583 18.0816 5.33583 17.5433 6.61833L14.5508 13.6642L6.90327 14.3133C5.50993 14.4242 4.93993 16.1658 6.00077 17.0842L11.8116 22.1192L10.0699 29.5925C9.75327 30.9542 11.2258 32.0308 12.4291 31.3025L18.9999 27.3442Z"
                        fill="#DADE2A"
                      />
                    </svg>
                    <span>
                      {movieDetails.rating}
                      <sub>/ 10</sub>
                    </span>
                  </div>
                  <p className={styles.description}>
                    {movieDetails.description}
                  </p>
                  <i className={styles.categories}>
                    {movieDetails.categories} | {movieDetails.year}
                  </i>
                </div>
              </div>
            </div>
            <div className={styles.overlay_left}></div>
            <div className={styles.overlay_bottom}></div>
          </div>
          <div className={styles.more_info}>
            <div className={styles.container_more_info}>
              {movieDetails.key && (
                <iframe
                  style={{ width: "min(100%, 108rem)", aspectRatio: "16/9" }}
                  src={`https://www.youtube.com/embed/${movieDetails.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              )}
            </div>
            <Recomendations />
            <Overlay />
          </div>
        </>
      )}
    </>
  );
};
