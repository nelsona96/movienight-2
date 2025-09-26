import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/sections/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let searchInputProps = {
    handleInput: handleInput,
    searchMovies: searchMovies,
    loading: loading,
    search: search,
  };

  useEffect(() => {
    if (page > 1) {
      fetchMovies();
    }
  }, [page]);

  async function fetchMovies(firstPage) {
    // setLoading(true);
    try {
      if (!error) {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=6dbbb021&s=${search.trim()}&page=${
            firstPage || page
          }`
        );
        const seenIds = new Set();

        const uniqueMovies = data?.Search?.filter((movie) => {
          const isDuplicate = seenIds.has(movie.imdbID);
          seenIds.add(movie.imdbID);

          return !isDuplicate;
        });

        if (page > 1) {
          setMovies((prevMovies) => [
            ...prevMovies,
            ...uniqueMovies?.slice(0, 8),
          ]);
        } else {
          setMovies(uniqueMovies?.slice(0, 8));
        }
        setTimeout(() => {
          setLoading(false);
        }, 900);
      }
    } catch {
      setLoading(false);
    }
  }

  function handleInput(input) {
    setSearch(input);
  }

  function searchMovies() {
    setLoading(true);
    setMovies([]);
    setPage(1);
    setSubmittedSearch(search);
    fetchMovies(1);
  }

  function resetSearch() {
    setSearch("");
    setSubmittedSearch("");
    setMovies([]);
  }

  function turnPage() {
    setPage((prevPage) => (prevPage += 1));
  }

  return (
    <Router>
      <NavBar {...searchInputProps} />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage {...searchInputProps} resetSearch={resetSearch} />
            }
          />
          <Route
            path="/search"
            element={
              <SearchPage
                {...searchInputProps}
                turnPage={turnPage}
                movies={movies}
                page={page}
                submittedSearch={submittedSearch}
              />
            }
          />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
