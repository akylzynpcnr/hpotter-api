import React from "react";

export default () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Harry Potter
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Anasayfa <span className="sr-only" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ürünler
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Fiyatlar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
