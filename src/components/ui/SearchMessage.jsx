export default function SearchMessage({submittedSearch, errorMessage, sortedMovies}) {
  function searchMessage() {
    if (!submittedSearch) {
      return "Search for your movie!";
    } else if (errorMessage) {
      return "Oops! There was an error with your search, please try again.";
    } else if (submittedSearch && sortedMovies?.length === 0) {
      return "No search results.";
    }
  }

  return <h3 className="search-message">{searchMessage()}</h3>;
}
