import { useState } from "react";
import { Link } from "react-router-dom";
import MovieCardSkeleton from "./MovieCardSkeleton";

export default function MovieCard({ movie }) {
  const [error, setError] = useState(false);

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <figure className="movie-card__poster">
        <img
          src={movie.Poster}
          alt="Poster not found"
          onError={() => setError(true)}
          className={error ? "movie-card__img no-img" : "movie-card__img"}
        />
      </figure>
      <div className="movie-card__info">
        <h3 className="movie-card__title" title={movie.Title}>
          {movie.Title}
        </h3>
        <p className="movie-card__year">{movie.Year}</p>
      </div>
    </Link>
  );
}
