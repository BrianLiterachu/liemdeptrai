import { RandomMovie } from "./components/RandomMovie";
import { GalleryMovies } from "../../components/GalleryMovies/GalleryMovies";
import styles from "./Home.module.css";
import { MoviesContextProvider } from "../../context/MoviesContext";

export const Home = () => {
  return (
    <div className={styles.home}>
      <MoviesContextProvider>
        <RandomMovie />
      </MoviesContextProvider>
      <GalleryMovies />
    </div>
  );
};
