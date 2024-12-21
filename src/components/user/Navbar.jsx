import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Navbar Start Here */}

      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {/* Navbar */}
              <div className="logo-nav">
                <div className="navlogo">
                  <div className="carlogo" style={{ borderRadius: "50%" }}>
                    <div className="caricon">
                      <i className="bi bi-truck"></i>
                    </div>
                  </div>
                  <div className="carhouse">
                    <p>
                      <span className="cartex">THE</span>
                      <br />
                      carhouse
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/CarListing">
                    Cars
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/ContactUs">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#lg">
                    Login
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
