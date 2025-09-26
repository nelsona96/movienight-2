import MetaData from "./MetaData";
import KeyDetail from "./KeyDetail";

export default function MovieDetails({ movie }) {
  return (
    <div className="movie-details__column">
      <h1 className="movie-details__title">{movie?.Title}</h1>
      <div className="movie-details__metadata">
        <MetaData meta={movie?.Rated} />
        <MetaData meta={movie?.Year} />
        <MetaData meta={movie?.Runtime} />
        <span className="movie-details__rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
            className="movie-details__star"
          >
            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
          </svg>
          <span className="metadata__info">{movie?.imdbRating}</span>
        </span>
      </div>

      <div className="movie-details__genre-tags">
        {movie?.Genre?.split(", ").map((genre) => (
          <span key={genre} className="btn genre-tag">
            {genre}
          </span>
        ))}
      </div>

      <h2 className="section-title">Summary</h2>
      <p className="movie__plot">{movie?.Plot}</p>

      <h2 className="section-title">Key Details</h2>
      <ul className="key-details__list">
        <KeyDetail detail={"Director"} detailInfo={movie?.Director} />
        <KeyDetail detail={"Writers"} detailInfo={movie?.Writer} />
        <KeyDetail detail={"Actors"} detailInfo={movie?.Actors} />
        <KeyDetail detail={"Awards"} detailInfo={movie?.Awards} />
      </ul>
    </div>
  );
}
