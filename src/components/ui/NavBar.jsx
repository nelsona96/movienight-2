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
              Home
            </NavLink>
            <NavLink
              to="/search"
              className="nav__link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
