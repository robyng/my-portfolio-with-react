import React from 'react';

function Project(props) {
    // destrcutured props. same as const project = props.project but allows one vs multiple lines
    const { project } = props
    return (
    

                    <div className="col-6">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt="my project1" width="300px" />
                        <div>{project.description}</div>
                        <a href={project.repo} target="_blank" rel="noreferrer"> <button>See Repo</button>    </a>
                        <a href={project.deployed} target="_blank" rel="noreferrer"> <button>See in Action</button>    </a>

                    </div>


    )
}

export default Project;


