import PropTypes from 'prop-types';

function MyComponent(props) {
    return <div>{props.name}</div>;
  }
  
MyComponent.propTypes = {
    name: PropTypes.string,
}; 


function Projects(props) {
    return (
    <div className="card">
        <div className="card-body">
        {props.project.key} 
      <h3>  {props.project.title} <br /> </h3>
     <img src={props.project.image}></img> <br /> 
        {props.project.description}<br /> 
        {props.project.link}<br /> 
        {props.project.github}
        </div>
    </div>
    )
}


Projects.propTypes = {
    key: PropTypes.number,
    project: PropTypes.array
}; 
export default Projects;
