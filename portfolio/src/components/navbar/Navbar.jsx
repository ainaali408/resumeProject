import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import aina from '../../images/aina2.png'

const Navbar = () => {
  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
  }, []);

  // Function to close the sidenav
  const closeSidenav = () => {
    const sidenavInstance = M.Sidenav.getInstance(document.querySelector(".sidenav"));
    sidenavInstance.close();
  };

  return (
    <>
      <nav
        className="light-blue darken-4"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <div className="container">
          <div className="nav-wrapper">
            {/* Hamburger menu trigger */}
            <Link to="#" data-target="side-nav" className="sidenav-trigger">
              <i className="fas fa-bars"></i>
            </Link>
            <ul className="hide-on-small-only left">
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <i className="fas fa-copy"></i> Skills
                </Link>
              </li>
              <li>
                <Link to="/experiences">
                  <i className="fas fa-id-badge"></i> Experiences
                </Link>
              </li>
              <li>
                <Link to="/educations">
                  <i className="fas fa-graduation-cap"></i> Educations
                </Link>
              </li>
            </ul>

            {/* Logo on the right */}
            <ul className="right">
              <li>
                <div
                  className="logo-container"
                  style={{
                    height: "48px",
                    width: "40px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={aina}
                    alt="Profile"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar navigation */}
      <ul className="sidenav" id="side-nav">
        <li>
        <li>
                <Link to="/" onClick={closeSidenav}>
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
        </li>
        <li>
          <Link to="/" onClick={closeSidenav}>
            <i className="fas fa-copy"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={closeSidenav}>
            <i className="fas fa-copy"></i> Skills
          </Link>
        </li>
        <li>
          <Link to="/experiences" onClick={closeSidenav}>
            <i className="fas fa-id-badge"></i> Experiences
          </Link>
        </li>
        <li>
          <Link to="/educations" onClick={closeSidenav}>
            <i className="fas fa-graduation-cap"></i> Educations
          </Link>
        </li>
     
        
      </ul>
    </>
  );
};

export default Navbar;





