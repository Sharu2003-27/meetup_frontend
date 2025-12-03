 import {  NavLink } from "react-router-dom";

function Headers({ search, setSearch }) {

  return (
    <>
    <div className="px-5 mt-3">
      <nav className="navbar">
        <div className="d-flex justify-content-start">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZrefOTIegvN-biOkMpPzGqVIY2jjL2BBmA&s"
              alt="Meetup Logo"
              width="190"
              height="90"
              className="me-2"
            />
          </NavLink>
          </div>
          <div>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control"
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
      </div>
    </>
  );
}

export default Headers;
