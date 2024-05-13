import { useState } from "react"
import Portfolio from "./pages/portfolio"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Home from "./pages/Home"
import NavBar from "./NavBar"

export default fucntion PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
    }
    if (currentPage === 'AboutMe') {
        return <AboutMe />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
    }
    return <Resume />


const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <main className="mx-3">{renderPage}</main>

    </div>
)
}