import { useNavigate } from "react-router-dom";
import styles from "./CardMovie.module.css";

export const CardMovie = ({ idmovie, title, urlImage }) => {
  const navigate = useNavigate();
  const id = idmovie;

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.card_movie}>
      <img src={urlImage} alt={title} onClick={handleClick} />
    </div>
  );
};
