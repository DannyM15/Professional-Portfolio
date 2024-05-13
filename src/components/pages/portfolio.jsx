import Projects from '../projects'
import db from '../../db/db.json'

function Portfolio () {
    return <>
    <h1>Portflio</h1>
    {
        db.map((project, index) => {
        console.log(db)
            return <Projects key={index} project={project} />
            
        }, [])
    }
    </>
}

export default Portfolio;
