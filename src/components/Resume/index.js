import React from 'react';
import resume from '../../assets/images/robyn-graham-resume.pdf'

function Resume() {
    return(
        <section className="container">
          <h3>My Resume</h3>
          <div className='download'>
          <a href={resume} target="_blank" rel="noreferrer"> <button className='btn btn-success  float-left'>Download Now</button></a>
          </div>
            
        </section>
    )
}

export default Resume;