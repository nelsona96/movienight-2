import SearchInput from "../components/ui/SearchInput";
import MovieCard from "../components/ui/MovieCard/MovieCard";
import FilterBar from "../components/ui/FilterBar";
import MovieCardSkeleton from "../components/ui/MovieCard/MovieCardSkeleton";
import { useEffect, useState } from "react";
import SearchMessage from "../components/ui/SearchMessage";

export default function SearchPage({
  search,
  turnPage,
  movies,
  loading,
  page,
  submittedSearch,
  errorMessage,
  ...props
}) {
  const [currentSort, setCurrentSort] = useState("");

  function handleSortChange(sort) {
    setCurrentSort(sort);
  }

  let sortedMovies = [];
  if (movies?.length > 0) {
    sortedMovies = [...movies];
  }

  currentSort === "A_TO_Z" &&
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  currentSort === "Z_TO_A" &&
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  currentSort === "NEWEST" &&
    sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  currentSort === "OLDEST" &&
    sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));

  useEffect(() => {
    setCurrentSort("");
  }, [submittedSearch]);

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
        {submittedSearch && (
          <FilterBar
            currentSort={currentSort}
            handleSortChange={handleSortChange}
          />
        )}
        {!loading && (
          <SearchMessage
            submittedSearch={submittedSearch}
            sortedMovies={sortedMovies}
            errorMessage={errorMessage}
          />
        )}
        <div className="movies">
          {loading
            ? Array.from({ length: 8 }, (_, i) => i + 1).map((_, i) => (
                <MovieCardSkeleton key={i} />
              ))
            : sortedMovies?.map((movie) => (
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
