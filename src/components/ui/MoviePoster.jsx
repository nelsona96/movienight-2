import { useState } from "react";

export default function MoviePoster({ poster }) {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className="movie-poster__column">
      <img
        src={poster}
        alt="Poster not found"
        onError={() => setImgError(true)}
        className={imgError ? "movie-poster__img no-img" : "movie-poster__img"}
      />
    </figure>
  );
}
