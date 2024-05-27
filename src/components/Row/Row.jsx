import { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">

      {movies.map((movie) => (
          <img
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          key={movie.id}
          src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            />
        ))}
        </div>
    </div>
  );
}

export default Row;
