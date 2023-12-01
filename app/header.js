const Header = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        {/* <img src="logo4.png" style={{ height: '40px',marginLeft: '5px' }} alt="Logo"></img> */}
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
            <form className="d-flex" role="search">
              <div className="input-group">
                <input
                  className="form-control fs-5"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-white bg-white" type="submit" >
                  <i class="fa-solid fa-magnifying-glass"style={{ fontSize: '28px', marginRight: '5px' }}></i>         
                </button>
              </div>
            </form>
          </div>
        </div>
        <a href="/Cart" style={{ textDecoration: 'none', marginRight: '100px', color: 'white' }}>
          <i className="fa-sharp fa-solid fa-cart-plus" style={{ fontSize: '28px', marginRight: '5px' }}></i>
          Cart
        </a>
        <div className="d-flex">
              <a href="/signup" style={{ textDecoration: 'none', color: 'white', marginRight: '15px' }}><i class="fa-solid fa-user-plus" style={{ fontSize: '19px', marginRight: '5px' }}></i>
                Sign Up
              </a>
              <a href="/login" style={{ textDecoration: 'none',marginRight: '15px', color: 'white' }}><i className="fas fa-sign-in-alt"style={{ fontSize: '19px', marginRight: '5px' }}></i>
                Login
              </a>             
          </div>
      </nav>
    );
  };
  
  export default Header;
  


