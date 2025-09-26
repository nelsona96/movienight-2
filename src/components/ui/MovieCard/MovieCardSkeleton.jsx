export default function MovieCardSkeleton() {
  return (
    <div className="movie-card movie-card--skeleton">
      <figure className="movie-card__poster movie-card__poster--skeleton">
        <img className="movie-card__img movie-card__img--skeleton" />
      </figure>
      <div className="movie-card__info movie-card__info--skeleton">
        <h3
          className="movie-card__title movie-card__title--skeleton"
        >
          Movie Title
        </h3>
        <p className="movie-card__year movie-card__year--skeleton">
          Year
        </p>
      </div>
    </div>
  );
}
