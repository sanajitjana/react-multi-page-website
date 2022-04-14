import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link
            className="navbar-brand"
            to="https://sanajitjana.github.io/react-multi-page-website/home"
          >
            React Multi-Page Website
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname ===
                  "https://sanajitjana.github.io/react-multi-page-website/home"
                    ? "active"
                    : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname ===
                  "https://sanajitjana.github.io/react-multi-page-website/about"
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="https://sanajitjana.github.io/react-multi-page-website/about"
                >
                  About
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname ===
                  "https://sanajitjana.github.io/react-multi-page-website/contact"
                    ? "active"
                    : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to="https://sanajitjana.github.io/react-multi-page-website/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
