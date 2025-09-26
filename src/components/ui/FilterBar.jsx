export default function FilterBar({ search }) {
  return (
    <div className="filter-bar">
      {/* <h3 className="results">Results for: "{search}"</h3> */}
      <select
        name="sort-movies"
        id="sort-movies"
        defaultValue="SORT_BY"
        className="filter-bar__select"
      >
        <option value="SORT_BY" disabled>
          Sort By
        </option>
        <option value="A_TO_Z">A to Z</option>
        <option value="Z_TO_A">Z to A</option>
        <option value="NEWEST">Date, Newest</option>
        <option value="OLDEST">Date, Oldest</option>
        <option value="RATING_HIGH">Rating</option>
      </select>
    </div>
  );
}
