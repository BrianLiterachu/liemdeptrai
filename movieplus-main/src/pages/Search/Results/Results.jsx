import styles from "./Results.module.css";
import { useFetch } from "../../../hooks/useFetch";
import { CardMovie } from "../../../components/GalleryMovies/components/CardMovie/CardMovie";
import { useSearchParams } from "react-router-dom";

const api = import.meta.env.VITE_API_SEARCH;
const urlImage = import.meta.env.VITE_API_IMAGE_POSTER;

export const Results = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = `${api}&query=${query}&api_key=`;
  const { data: movies } = useFetch(url);

  return (
    <div className={styles.results_container}>
      {movies.length > 0 && (
        <>
          <span className={styles.results}>
            {query} {movies.length} resultados
          </span>
          <div className={styles.movies}>
            <div className={styles.container}>
              {movies.map(
                ({ id, original_title: title, poster_path }) =>
                  poster_path && (
                    <CardMovie
                      key={id}
                      title={`Cover ${title}`}
                      urlImage={urlImage + poster_path}
                      idmovie={id}
                    />
                  )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
