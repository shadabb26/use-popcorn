import { useEffect,useState } from "react";

const KEY = "71028372";

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  useEffect(
    function () {
        // callback?.()
      const controller = new AbortController();
      async function fecthMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Something went Wrong");

          const data = await res.json();
          // console.log(data);
          if (data.Response === "False") throw new Error("No movies Found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
    //   handleCloseMovie();
      fecthMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return {movies,isLoading,setError,setIsLoading}
}
