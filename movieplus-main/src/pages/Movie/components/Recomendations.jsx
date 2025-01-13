import { useParams } from "react-router-dom";
import styles from "./Recomendations.module.css";
import { useFetch } from "../../../hooks/useFetch";
import { CardMovie } from "../../../components/GalleryMovies/components/CardMovie/CardMovie";

const api = import.meta.env.VITE_API;
const urlImagePoster = import.meta.env.VITE_API_IMAGE_POSTER;

export const Recomendations = () => {
  const { id } = useParams();
  const url = `${api + id}/recommendations?page=1&api_key=`;

  const { data: movies } = useFetch(url);

  const handleScroll = () => window.scrollTo(0, 0);
  
  return (
    <>
      {movies.length > 0 && (
        <div className={styles.movies}>
          <span className={styles.title}>Recomendations</span>
          <div className={styles.container} onClick={handleScroll}>
            {movies.map(
              ({ id, original_title: title, poster_path }) =>
                poster_path && (
                  <CardMovie
                    key={id}
                    title={title}
                    urlImage={urlImagePoster + poster_path}
                    idmovie={id}
                  />
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};
