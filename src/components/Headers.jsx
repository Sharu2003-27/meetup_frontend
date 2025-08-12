 import {  NavLink } from "react-router-dom";
// import { useState } from 'react'
// import  useFetch  from "../useFetch"

function Headers({ search, setSearch }) {

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZrefOTIegvN-biOkMpPzGqVIY2jjL2BBmA&s"
              alt="Meetup Logo"
              width="190"
              height="80"
              style={{ marginRight: "10px" }}
            />
          </NavLink>

          <form className="d-flex align-items-center" role="search">
            <input
              className="form-control me-3"
              data-bs-theme="dark"
              type="search"
              placeholder="Search by title and tags"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Headers;
