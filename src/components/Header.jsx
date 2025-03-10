import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Header() {
    const location = useLocation();

    const pageTitles = {
      "/": "Home",
      "/Projects": "Projects",
      "/Resume": "Resume",
    };
  
    return (
        <>
            <h1>{pageTitles[location.pathname] || "Page Not Found"}</h1>
            <nav>
            {location.pathname !== "/" && <Link to="/">HOME</Link>}
            {location.pathname !== "/Projects" && <Link to="/Projects">Projects</Link>}
            {location.pathname !== "/Resume" && <Link to="/Resume">Resume</Link>}
            </nav>
        </>
    );
}

export default Header;
