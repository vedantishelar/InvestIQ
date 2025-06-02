import React from "react";

function Navbar() {
  return (
    
      <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "#FFF;"}}>
        <div className="container p-2">
          <a className="navbar-brand" href="/">
            <img src="media/images/logo.png" style={{width: "19%"}} alt="logo"/>
          </a>
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
    
            <form className="d-flex" role="search">
               <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Signup
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/link">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/link">
                  Product
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/link">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/link">
                  Support
                </a>
              </li>

            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
