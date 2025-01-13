import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const MoviesContext = createContext();

const api = import.meta.env.VITE_API;

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(`${api}popular?page=${page}&api_key=`);

  useEffect(() => {
    setPage(1);
    setUrl(
      category
        ? `${api}popular?with_genres=${category}&page=1&api_key=`
        : `${api}popular?page=${page}&api_key=`
    );
  }, [category]);

  useEffect(() => {
    setUrl(
      category
        ? `${api}popular?with_genres=${category}&page=${page}&api_key=`
        : `${api}popular?page=${page}&api_key=`
    );
  }, [page]);

  const { data } = useFetch(url);

  useEffect(() => {
    if (movies.length === 0 || page === 1) setMovies(data);
    else if (page > 1) {
      const allMovies = [...movies, ...data].filter(
        (movie, i, array) => i === array.findIndex(({ id }) => id === movie.id)
      );

      setMovies(allMovies);
    }
  }, [data, page, category]);

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, category, setCategory, page, setPage }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
