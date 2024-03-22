import Sticky from "react-stickynode";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <>
        <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one`}>
            <div className={`container `}>
              {/* <Link className={`navbar-brand `} to="/">
                <img
                  src={require("../img/home_isif.png")}
                  alt=""
                  style={{
                    width: "163px",
                  }}
                />
                <img
                  src={require("../img/home_isif.png")}
                  alt="logo"
                  style={{
                    width: "163px",
                  }}
                />
              </Link> */}
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto `}>
                  <li className="nav-item ">
                    <Link to="/" className="nav-link" title="home">
                      Beranda
                    </Link>
                  </li>
                  {/* <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Liputan Berita
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/PageNewsList"
                        >
                          Berita
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                  <li className="nav-item">
                    <a
                      title="Winner"
                      className="nav-link"
                      target="-blank"
                      href=""
                    >
                      Buku Panduan
                    </a>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      title="Service"
                      className="nav-link"
                      to=""
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink title="Contact" className="nav-link" to="">
                      Kontak
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    </>
    )
}

export default Navigation;