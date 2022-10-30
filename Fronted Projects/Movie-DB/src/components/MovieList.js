import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setInput }) => {
  return (
    <div className="w-screen my-7">
      <h1 className="text-center font-bold text-4xl">
        Search Movies from Below
      </h1>
      <div className="flex flex-wrap items-center justify-center md:justify-between my-3 mx-10 space-x-1 space-y-5">
        {movies?.map((movie, index) => {
          return <MovieCard key={index} setInput={setInput} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
