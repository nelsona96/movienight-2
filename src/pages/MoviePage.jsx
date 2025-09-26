import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviePoster from "../components/ui/MoviePoster";
import MovieDetails from "../components/ui/MovieDetails";
import MoviePageLoader from "../components/ui/MoviePageLoader";
import DelayedRender from "../components/DelayedRender";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function fetchMovie() {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=6dbbb021&i=${id}`
      );
      setMovie(data);
    } catch (error) {
      console.error(movie.Error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <section id="movie-page">
      <div className="back-btn__container">
        <button className="btn back-btn" onClick={() => window.history.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="currentColor"
            className="back-icon"
          >
            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </button>
      </div>
      {loading ? (
        <DelayedRender delay={300}>
          <MoviePageLoader />
        </DelayedRender>
      ) : (
        <div className="container">
          <div className="row movie-page__row">
            <MoviePoster poster={movie?.Poster} />
            <MovieDetails movie={movie} />
          </div>
        </div>
      )}
    </section>
  );
}
