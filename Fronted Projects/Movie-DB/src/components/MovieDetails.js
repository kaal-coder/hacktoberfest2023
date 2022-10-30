import React, { useEffect, useState } from "react";
import { imageBaseUrl } from "../axios";

const MovieDetails = ({ movies, searchInput }) => {
  const [movie, setMovie] = useState();
  useEffect(() => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title.toUpperCase() === searchInput.toUpperCase()) {
        setMovie(movies[i]);
        console.log(movies[i]);
        break;
      }
    }
  }, []);

  return (
    <div>
      <div className="absolute md:h-screen space-x-5 mt-10 lg:mt-0 flex w-screen justify-center items-start lg:items-center">
        <img
          src={imageBaseUrl + movie?.poster_path}
          className="hidden shadow-lg md:block w-64 rounded-md"
        />
        <div className="md:w-1/2">
          <h1 className="font-bold text-4xl">{movie?.title}</h1>
          <p className="mt-2">{movie?.overview}</p>
          <div className="mt-12 space-y-1">
            <h3 className="font-bold text-xl">
              Release Date:{" "}
              <span className="font-normal">{movie?.release_date}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Vote Average:{" "}
              <span className="font-normal"> {movie?.vote_average}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Popularity:{" "}
              <span className="font-normal"> {movie?.popularity}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Vote Count:{" "}
              <span className="font-normal"> {movie?.vote_count}</span>
            </h3>
            <h3 className="font-bold text-xl">
              Adult Content:{" "}
              <span className="font-normal">
                {movie?.adult ? "18+" : "NIL"}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <img
        className="hidden lg:block opacity-20"
        src={imageBaseUrl + movie?.backdrop_path}
      />
      <img
        className="lg:hidden opacity-20"
        src={imageBaseUrl + movie?.poster_path}
      />
    </div>
  );
};

export default MovieDetails;
