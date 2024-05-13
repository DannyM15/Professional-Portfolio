function NavBar({ currentPage, handlePageChange }) {
    return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
        <a href="#Home"
        onClick={() => handlePageChange('home')}
        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </a>
        </li>
        <li className="nav-item">
          <a href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
            </a>
        </li>
        <li className="nav-item">
          <a href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </a>

        </li>
        <li className="nav-item">
          <a href="#Resume"
          onClick={() => handlePageChange('resume')}
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
          
        </li>
      </ul>
    )
}

export default NavBar;