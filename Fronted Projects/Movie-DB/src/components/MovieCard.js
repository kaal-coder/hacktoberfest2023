import React, { useState } from "react";
import { imageBaseUrl } from "../axios";

const MovieCard = ({ movie, setInput }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  return (
    <div>
      <div>
        <div className={`${detailsVisible ? "absolute" : "hidden"} w-64 p-2`}>
          <h1 className="text-lg z-10 font-bold">{movie?.title}</h1>
          <p>{movie?.overview}</p>
        </div>
        <img
          src={imageBaseUrl + movie?.poster_path}
          alt="poster"
          loading="lazy"
          onClick={() => setInput(movie?.title)}
          onMouseEnter={() => setDetailsVisible(true)}
          onMouseLeave={() => setDetailsVisible(false)}
          className="hover:opacity-30 w-64 rounded-lg shadow-md hover:shadow-lg cursor-pointer hover:scale-105 duration-150 ease-out"
        />
      </div>
    </div>
  );
};

export default MovieCard;
