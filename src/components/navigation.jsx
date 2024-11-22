import Sticky from "react-stickynode";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Navigation() {
    return (
        <>
        <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className="navbar navbar-expand-lg menu_one">
            <div className="container" >
              <Link className="navbar-brand " to="/">
                <img src="/assets/logo/NSIF.png" alt="test"/>
                <img src="/assets/logo/NSIF.png" alt="logo" />
              </Link>
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
                <ul className="navbar-nav menu ml-auto ">
                  <li className="nav-item ">
                    <Link to="/" className="nav-link" title="home">
                      Beranda
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      title="Winner"
                      className="nav-link"
                      target="-blank"
                      href="https://drive.google.com/file/d/1hKvIrelIvMSA3ouMYYVfDhkcLdyfUBDf/view?usp=sharing"
                    >
                      Buku Panduan
                    </a>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Daftar Pemenang
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="https://drive.google.com/file/d/1FprgaHepKiWxxrJxRXHEqeRtlpe_z_ue/view?usp=sharing"
                          target="_blank"
                        >
                          Daftar Pemenang 2024
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Liputan Media
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="https://drive.google.com/file/d/1nZYFOswe9xRy-s4-fTlSiHedpxFayAM2/view?usp=sharing"
                          target="_blank"
                        >
                          Pesan Siaran 2024
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Kurasi
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="https://drive.google.com/drive/folders/1WwYkepxXfmnWePsa7KqptyIGrWdA0sJQ?usp=sharing"
                          target="_blank"
                        >
                          Kurasi 2024
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sertifikat
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="https://drive.google.com/drive/folders/1GwN1Dknrbd3xctVBswQ5NWYu9BD6qFqi?usp=drive_link"
                          target="_blank"
                        >
                          Sertifikat Supervisor 2024
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Galeri
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="https://drive.google.com/drive/folders/1p9ZRMi7TI6JzMjNCmeiBhlwIuxLqt7YC?usp=sharing"
                          target="_blank"
                        >
                          Galeri 2024
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      title="Service"
                      className="nav-link"
                      to="/faq"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink title="Contact" className="nav-link" to="/contact">
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