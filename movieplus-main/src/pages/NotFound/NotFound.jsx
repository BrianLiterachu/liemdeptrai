import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <span className={styles.number}>404</span>
      <span className={styles.message}>Ops! Page Not Found</span>
      <Link className={styles.return} to={"/"}>
        Return Home
      </Link>
    </div>
  );
};
