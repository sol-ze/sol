import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

import "./Navbar.css";
import NavbarLinkPartial from "../../partials/NavbarLinkPartial";

import LinkClass from "../../classes/LinkClass";
import NavBarLinkComponent from "./NavBarLinkComponent";

const linksArr = [
  new LinkClass("Home", "/"),
  new LinkClass("About us", "/aboutUs"),
  new LinkClass("Contact us", "/"),
  new LinkClass("Static Home", "/statichomepage"),
];
const authLinks = [
  new LinkClass("Register", "/registerpage"),
  new LinkClass("Login", "/login"),
];

const Navbar = ({ isDark }) => {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn);
  const userInfo = useSelector((state) => state.authStore.userInfo);
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    // console.log("handleLogoutClick");
    dispatch(authActions.logout());
  };
  return (
    <nav
      className={`navbar ${
        isDark ? "bg-dark" : ""
      } navbar-expand-md bg-body-tertiary`}
    >
      <div className="container-fluid">
        <NavbarLinkPartial
          className={`navbar-brand ${isDark ? "nav-item-light" : ""}`}
          to="/"
          activeClassName="thickText"
        >
          Navbar
        </NavbarLinkPartial>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {linksArr.map((item) => {
              return (
                <NavBarLinkComponent
                  key={item.name + Date.now()}
                  isDark={isDark}
                  to={item.path}
                  children={item.name}
                  activeClassName="thickText"
                ></NavBarLinkComponent>

                // <li className="nav-item" key={item.name + Date.now()}>
                //   <NavbarLinkPartial
                //     className={`nav-link ${isDark ? "nav-item-light" : ""}`}
                //     to={item.path}
                //     activeClassName="thickText"
                //   >
                //     {item.name}
                //   </NavbarLinkPartial>
                // </li>
              );
            })}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn ${
                isDark ? "btn-outline-light" : "btn-outline-primary"
              }`}
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {isLoggedIn
              ? [
                  <NavBarLinkComponent
                    key={"/profile" + Date.now()}
                    isDark={isDark}
                    to="/profile"
                    activeClassName="thickText"
                  >
                    {userInfo.name}
                  </NavBarLinkComponent>,
                  <NavBarLinkComponent
                    key={"/login" + Date.now()}
                    isDark={isDark}
                    to="/login"
                    onClick={handleLogoutClick}
                    activeClassName="thickText"
                  >
                    Logout
                  </NavBarLinkComponent>,
                ]
              : authLinks.map((item) => {
                  return (
                    <NavBarLinkComponent
                      key={item.name + Date.now()}
                      isDark={isDark}
                      to={item.path}
                      children={item.name}
                      activeClassName="thickText"
                    ></NavBarLinkComponent>
                  );
                })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
