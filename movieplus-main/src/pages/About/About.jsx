import styles from "./About.module.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className={styles.about}>
      <span className={styles.title}>
        This site was developed by{" "}
        <b>
          <a href="https://github.com/FreddyDanilo" target="_blank">
            Freddy Danilo
          </a>
        </b>
      </span>
      <a
        className={styles.repository}
        href="https://github.com/FreddyDanilo/movieplus"
        target="_blank"
      >
        Acess Repository
      </a>
    </div>
  );
};
