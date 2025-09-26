import SearchInput from "../components/ui/SearchInput";
import MovieCard from "../components/ui/MovieCard/MovieCard";
import FilterBar from "../components/ui/FilterBar";
import MovieCardSkeleton from "../components/ui/MovieCard/MovieCardSkeleton";
import DelayedRender from "../components/DelayedRender";

export default function SearchPage({
  search,
  turnPage,
  movies,
  loading,
  page,
  submittedSearch,
  ...props
}) {
  return (
    <section id="search">
      <div className="container">
        <div className="search-bar">
          <SearchInput
            {...props}
            search={search}
            loading={loading}
            variant="searchPage"
          />
        </div>
        {submittedSearch && <FilterBar search={search} />}
        <div className="movies">
          {loading
            ? Array.from({ length: 8 }, (_, i) => i + 1).map((_, i) => (
                <MovieCardSkeleton key={i} />
              ))
            : movies?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
        </div>
        {movies?.length > 0 && page < 3 && (
          <div className="view-more">
            <button className="btn view-more__btn" onClick={() => turnPage()}>
              Discover More...
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
