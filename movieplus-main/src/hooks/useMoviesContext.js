import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    console.log("Error Movie Context");
    return;
  }
  return context;
};
