import { Link } from "react-router-dom";

function NavBar({ currentPage, handlePageChange }) {
    return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
        <Link to="/home"
        onClick={() => handlePageChange('Home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
        </li>
        <li className="nav-item">
          <Link to="/about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </Link>

        </li>
        <li className="nav-item">
          <Link to="/resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
          
        </li>
      </ul>
    )
}

export default NavBar;