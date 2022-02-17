import React from 'react';

function Project(props) {
    // destrcutured props. same as const project = props.project but allows one vs multiple lines
    const {project} = props
    const h3style={color: "blue", backgroundColor: "black"}
    return(
        <section id="mywork">
        <div className="work-box">
                   <h3 style={h3style}>{project.title}</h3>
                   <img src={project.image} alt="my project1" />
                   <div>{project.description}</div>
                   <a href={project.repo} target="_blank" rel="noreferrer"> <button>See Repo</button>    </a>
                   <a href={project.deployed} target="_blank" rel="noreferrer"> <button>See in Action</button>    </a>

            </div>

            </section>

    )
}

export default Project;


