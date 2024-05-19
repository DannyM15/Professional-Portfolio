import Projects from '../projects'
import db from '../../db/db.json'
import Footer from '../Footer'
import '../../App.css';



function Portfolio () {
    return <>
    <h1>Portflio</h1>
    {
        db.map((project, index) => {
        console.log(db)
            return <Projects key={index} project={project} />
            
        },)
    }
    <footer>
        <Footer />
    </footer>
    </>
}

export default Portfolio;
