import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchInput({
  handleInput,
  searchMovies,
  search,
  submittedSearch,
  loading,
  variant,
}) {
  const [componentClass, setComponentClass] = useState({
    inputWrapper: `input__wrapper`,
    input: `input`,
    searchIconWrapper: `search-icon__wrapper`,
    searchIcon: `search-icon`,
    loadingIcon: `loader`,
  });
  const inputRef = useRef(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!search) {
      inputRef.current && inputRef.current.focus();
    }

    if (variant === "nav") {
      setComponentClass({
        inputWrapper: `input__wrapper ${
          variant === "nav" ? "input__wrapper--nav" : ""
        }`.trim(),
        input: `input ${variant === "nav" ? "input--nav" : ""}`.trim(),
        searchIconWrapper: `search-icon__wrapper ${
          variant === "nav" ? "search-icon__wrapper--nav" : ""
        }`.trim(),
        searchIcon: `search-icon ${
          variant === "nav" ? "search-icon--nav" : ""
        }`.trim(),
        loadingIcon: `loader ${variant === "nav" ? "loader--nav" : ""}`.trim(),
      });
    }

    if (variant === "searchPage") {
      setComponentClass({
        inputWrapper: `input__wrapper ${
          variant === "searchPage" ? "input__wrapper--search-page" : ""
        }`.trim(),
        input: `input ${
          variant === "searchPage" ? "input--search-page" : ""
        }`.trim(),
        searchIconWrapper: `search-icon__wrapper ${
          variant === "searchPage" ? "search-icon__wrapper--search-page" : ""
        }`.trim(),
        searchIcon: `search-icon ${
          variant === "searchPage" ? "search-icon--search-page" : ""
        }`.trim(),
        loadingIcon: `loader ${
          variant === "searchPage" ? "loader--search-page" : ""
        }`.trim(),
      });
    }
  }, []);

  function sendSearch() {
    inputRef.current.blur();
    searchMovies();

    setTimeout(() => {
      search !== "" && pathname === "/" && navigate("/search");
    }, 800);
  }

  return (
    <div className={componentClass.inputWrapper}>
      <input
        id="search-input"
        type="text"
        placeholder="The Lord of the Rings..."
        value={search}
        ref={inputRef}
        className={componentClass.input}
        onChange={(event) => handleInput(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && sendSearch()}
      />

      {loading ? (
        <div className={componentClass.loadingIcon}></div>
      ) : (
        <div
          className={componentClass.searchIconWrapper}
          onClick={() => sendSearch()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            style={{ fill: "currentcolor" }}
            className={componentClass.searchIcon}
          >
            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
