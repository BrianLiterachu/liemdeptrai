import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { SearchInput } from "./components/SearchInput/SearchInput";

export const NavBar = () => {
  const [scrollEffect, setScrollEffect] = useState("scroll_initial");
  const [isWidthMobile, setIsWidthMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const handleWidthChange = (event) => setIsWidthMobile(event.matches);
    handleWidthChange(mediaQuery);
    mediaQuery.addEventListener("change", handleWidthChange);
    return () => mediaQuery.removeEventListener("change", handleWidthChange);
  }, []);

  const handleScroll = () => {
    const distanceAmongScrollAndTop = window.scrollY;
    if (distanceAmongScrollAndTop >= 150 && scrollEffect != "scroll_active")
      setScrollEffect("scroll_active");
    else if (
      distanceAmongScrollAndTop < 150 &&
      scrollEffect != "scroll_initial"
    )
      setScrollEffect("scroll_initial");
  };

  window.onscroll = handleScroll;

  return (
    <nav className={`${styles.navbar} ${scrollEffect}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" aria-label="Logo">
            <svg
              width="117"
              height="27"
              viewBox="0 0 117 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.424 3.536V26H20.952V12.528L15.928 26H11.512L6.456 12.496V26H0.984V3.536H7.448L13.752 19.088L19.992 3.536H26.424ZM58.766 20.88L62.638 8.144H68.462L62.126 26H55.374L49.038 8.144H54.894L58.766 20.88ZM73.5173 6.288C72.5573 6.288 71.7679 6.01067 71.1493 5.456C70.5519 4.88 70.2533 4.176 70.2533 3.344C70.2533 2.49067 70.5519 1.78667 71.1493 1.232C71.7679 0.655998 72.5573 0.367998 73.5173 0.367998C74.4559 0.367998 75.2239 0.655998 75.8213 1.232C76.4399 1.78667 76.7493 2.49067 76.7493 3.344C76.7493 4.176 76.4399 4.88 75.8213 5.456C75.2239 6.01067 74.4559 6.288 73.5173 6.288ZM76.2373 8.144V26H70.7653V8.144H76.2373ZM97.0347 16.784C97.0347 17.296 97.0028 17.8293 96.9388 18.384H84.5548C84.6401 19.4933 84.9921 20.3467 85.6108 20.944C86.2508 21.52 87.0294 21.808 87.9468 21.808C89.3121 21.808 90.2614 21.232 90.7948 20.08H96.6188C96.3201 21.2533 95.7761 22.3093 94.9868 23.248C94.2188 24.1867 93.2481 24.9227 92.0748 25.456C90.9014 25.9893 89.5894 26.256 88.1388 26.256C86.3894 26.256 84.8321 25.8827 83.4668 25.136C82.1014 24.3893 81.0348 23.3227 80.2668 21.936C79.4988 20.5493 79.1148 18.928 79.1148 17.072C79.1148 15.216 79.4881 13.5947 80.2348 12.208C81.0028 10.8213 82.0694 9.75467 83.4348 9.008C84.8001 8.26133 86.3681 7.888 88.1388 7.888C89.8668 7.888 91.4028 8.25067 92.7468 8.976C94.0908 9.70133 95.1361 10.736 95.8828 12.08C96.6508 13.424 97.0347 14.992 97.0347 16.784ZM91.4348 15.344C91.4348 14.4053 91.1148 13.6587 90.4748 13.104C89.8348 12.5493 89.0348 12.272 88.0748 12.272C87.1574 12.272 86.3788 12.5387 85.7388 13.072C85.1201 13.6053 84.7361 14.3627 84.5868 15.344H91.4348Z"
                fill="#F0F0F0"
              />
              <path
                d="M38.487 26.256C36.7377 26.256 35.159 25.8827 33.751 25.136C32.3643 24.3893 31.2657 23.3227 30.455 21.936C29.6657 20.5493 29.271 18.928 29.271 17.072C29.271 15.2373 29.6763 13.6267 30.487 12.24C31.2977 10.832 32.407 9.75467 33.815 9.008C35.223 8.26133 36.8017 7.888 38.551 7.888C40.3003 7.888 41.879 8.26133 43.287 9.008C44.695 9.75467 45.8043 10.832 46.615 12.24C47.4257 13.6267 47.831 15.2373 47.831 17.072C47.831 18.9067 47.415 20.528 46.583 21.936C45.7723 23.3227 44.6523 24.3893 43.223 25.136C41.815 25.8827 40.2363 26.256 38.487 26.256ZM38.487 21.52C39.5323 21.52 40.4177 21.136 41.143 20.368C41.8897 19.6 42.263 18.5013 42.263 17.072C42.263 15.6427 41.9003 14.544 41.175 13.776C40.471 13.008 39.5963 12.624 38.551 12.624C37.4843 12.624 36.599 13.008 35.895 13.776C35.191 14.5227 34.839 15.6213 34.839 17.072C34.839 18.5013 35.1803 19.6 35.863 20.368C36.567 21.136 37.4417 21.52 38.487 21.52ZM116.146 17.264H110.578V22.96H105.394V17.264H99.8255V12.368H105.394V6.64H110.578V12.368H116.146V17.264Z"
                fill="#38F8D4"
              />
            </svg>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            {!isWidthMobile && (
              <>
                <li>
                  <Link>News</Link>
                </li>
                <li>
                  <Link>Popularity</Link>
                </li>
                <li>
                  <Link>Rating</Link>
                </li>
                <li>
                  <Link>Movies</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
              </>
            )}
          </ul>
          <SearchInput />
          {/* <div className={styles.profile}></div> */}
        </div>
      </div>
    </nav>
  );
};
