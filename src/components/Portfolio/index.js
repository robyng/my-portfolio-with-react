import React from 'react';
import image1 from '../../assets/images/emc-pic.png'
import Project from '../Project'

function Portfolio(props) {
    const myWork = [
        {title: "Project 1", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 1", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 1", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 1", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 1", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 1", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"}
    ]


    return(
        <section>
           <h3>My Work</h3>
           {myWork.map(project => (
<Project project={project}></Project>
           ))}

        </section>
    )
}

export default Portfolio;