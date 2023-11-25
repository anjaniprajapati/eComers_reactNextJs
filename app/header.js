const Header = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        {/* <div className="container-fluid"> */}
        {/* <img src="loloA.jpg" style={{ height: '40px' }} alt="Logo"></img> */}
        <div className="container">
          <a className="navbar-brand " href="#">
            E-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="True"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex " role="search">
              <input
                className="form-control me-2 fs-4 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success me-5" type="submit">
                Search
              </button>
            </form>
            {/* <div className="d-flex">
              <a href="/login" className="btn btn-outline-light me-2">
                Login
              </a>
              <a href="/signup" className="btn btn-outline-light ">
                Sign Up
              </a>
            </div> */}
            {/* <img src="loloA.jpg" style={{ height: '40px' }} alt="Logo"></img> */}
          </div>
        </div>
        <div className="d-flex">
              <a href="/login" className="btn btn-outline-light me-2">
                Login
              </a>
              <a href="/signup" className="btn btn-outline-light ">
                Sign Up
              </a>
            </div>
      </nav>
    );
  };
  
  export default Header;
  