import { useEffect, useState } from "react";
import "./Row.css";
import axios from "axios";
import { Puff } from "react-loader-spinner"; // Import the specific loader
import Loader from "../Loader/Loader";


const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      {loading ? ( // Conditional rendering based on loading state
        <div className="loader-container">
          <Loader /> 
        
        </div>
      ) : (
        <div className="row_posters">
          {movies.map(
            (movie) =>
              ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name} loading="lazy"
                />
              )
          )}
        </div>
      )}
    </div>
  );
}

export default Row;

// import { useEffect, useState, useRef, useCallback } from "react";
// import "./Row.css";
// import axios from "axios";
// import Loader from "../Loader/Loader";

// const baseUrl = "https://image.tmdb.org/t/p/original";

// function Row({ title, fetchUrl, isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const imageElements = useRef([]);
//   const intervalRef = useRef(null);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//     } catch (error) {
//       console.error("Failed to fetch data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     intervalRef.current = setInterval(() => {
//       fetchData();
//     }, 180000);

//     return () => clearInterval(intervalRef.current);
//   }, [fetchUrl]);

//   const observer = useRef(null);

//   const observerCallback = useCallback((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src;
//         observer.unobserve(img);
//       }
//     });
//   }, []);

//   useEffect(() => {
//     if (observer.current) observer.current.disconnect();

//     observer.current = new IntersectionObserver(observerCallback, {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     });

//     imageElements.current.forEach((element) => {
//       if (element) observer.current.observe(element);
//     });

//     return () => {
//       if (observer.current) observer.current.disconnect();
//     };
//   }, [movies, observerCallback]);

//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       {loading ? (
//         <div className="loader-container">
//           <Loader />
//         </div>
//       ) : (
//         <div className="row_posters">
//           {movies.map(
//             (movie, index) =>
//               ((isLargeRow && movie.poster_path) ||
//                 (!isLargeRow && movie.backdrop_path)) && (
//                 <img
//                   className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//                   key={movie.id}
//                   data-src={`${baseUrl}${
//                     isLargeRow ? movie.poster_path : movie.backdrop_path
//                   }`}
//                   alt={movie.name}
//                   ref={(el) => {
//                     imageElements.current[index] = el;
//                   }}
//                   loading="lazy" // Native lazy loading
//                 />
//               )
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Row;


