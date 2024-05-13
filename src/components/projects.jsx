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
        {props.key}
        </div>
    </div>
    )
}
  
Projects.propTypes = {
    key: PropTypes.number,
    project: PropTypes.array
}; 
export default Projects;
