import React from 'react';
import emergencyApp from '../../assets/images/emc-pic.png'
import image1 from '../../assets/images/3-brothers.jpg'
import Project from '../Project'

function Portfolio(props) {
    const myWork = [
        {title: "Emergency Center", description:"Local disaster or emergency reporting - to connect people with important disaster updates in their area.", image: emergencyApp, repo: "https://github.com/robyng/Emergency-Center", deployed: "https://polar-shelf-64274.herokuapp.com/"},
        {title: "Project 2", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 3", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 4", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 5", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"},
        {title: "Project 6", description:"This project I learned...", image: image1, repo: "https://github.com", deployed: "https://sitereworks.com"}
    ]


    return(
        <section className='container'>
           <h3 className="work-box">My Work</h3>
           <div className='row'>
               
           {/* <div className="col-6">
                        <h3>{myWork[0].title}</h3>
                        <img src={myWork[0].image} alt="my myWork[0]1" width="300px" />
                        <div>{myWork[0].description}</div>
                        <a href={myWork[0].repo} target="_blank" rel="noreferrer"> <button>See Repo</button>    </a>
                        <a href={myWork[0].deployed} target="_blank" rel="noreferrer"> <button>See in Action</button>    </a>

                    </div>

                    <div className="col-6">
                        <h3>{myWork[0].title}</h3>
                        <img src={myWork[0].image} alt="my myWork[0]1" width="300px" />
                        <div>{myWork[0].description}</div>
                        <a href={myWork[0].repo} target="_blank" rel="noreferrer"> <button>See Repo</button>    </a>
                        <a href={myWork[0].deployed} target="_blank" rel="noreferrer"> <button>See in Action</button>    </a>

                    </div> */}
           {myWork.map((project, i) => (
<Project project={project}></Project>
           ))}
           </div>


        </section>
    )
}

export default Portfolio;