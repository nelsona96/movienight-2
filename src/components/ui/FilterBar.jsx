export default function FilterBar({ handleSortChange, currentSort }) {
  return (
    <div className="filter-bar">
      <select
        name="sort-movies"
        id="sort-movies"
        value={currentSort || "SORT_BY"}
        className="filter-bar__select"
        onChange={(event) => handleSortChange(event.target.value)}
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
