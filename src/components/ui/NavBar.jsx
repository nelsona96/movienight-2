import { NavLink, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import useWindowWidth from "../useWindowWidth";

export default function NavBar(props) {
  const { pathname } = useLocation();
  const width = useWindowWidth();

  return (
    <nav>
      <div className="container nav__container">
        <div className="row nav__row">
          <NavLink to="/" className="nav__logo--anchor">
            <h1 className="nav__logo">MovieNight</h1>
          </NavLink>
          {pathname === "/search" && width > 768 && (
            <SearchInput {...props} variant="nav" />
          )}
          <div className="nav__links">
            <NavLink to="/" className="nav__link">
              {width > 768 ? (
                "Home"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  style={{ fill: "currentColor" }}
                  className="nav__icon nav__icon--home"
                >
                  <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
                </svg>
              )}
            </NavLink>
            <NavLink
              to="/search"
              className="nav__link"
              onClick={() => window.scrollTo(0, 0)}
            >
              {width > 768 ? (
                "Search"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  style={{ fill: "currentcolor" }}
                  className="nav__icon nav__icon--search"
                >
                  <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"></path>
                </svg>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
