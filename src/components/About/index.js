import React from 'react';
import robyn from '../../assets/images/robyn-profile.jpg'

function About() {
    return(
<section>
    <div className='box container'>
        
    <img src={robyn} className="circle" alt="Robyn Graham outside with Golden Gate Bridge in background" title="Robyn Graham" />
<div className='about-disc'>
    <h3>About Me</h3>
        <p>The end goal in all my projects through my business, SiteReworks - Website Consulting, is to provide effective and affordable website presence. Each business has unique needs which I enjoy strategizing the perfect solution for. This is attained by harnessing the power of Wordpress and other popular visual builder platforms.</p>
        <br />
        <p>
On a personal level, I am motivated to create content with accessibility in mind; applications that all users can interact with including people with low sight, color blindness, low hearing, and unique physical ability. I see first hand, through my brother who is on the spectrum and legally blind, how technologies exclude him. I wish to change that for the future.</p>
<br />
<h4>StrengthFinders Top 5 Strengths from GALLUP</h4>
<ol>
<li>Achiever: Known for having great stamina for hard work.</li>
<li>Futuristic: Inspired by the future and what could be.</li>
<li>Ideation: Fascinated by ideas.</li>
<li>Strategic: Able to quickly find alternative ways to proceed.</li>
<li>Input: Collect and archive all kinds of information.</li>

</ol>
<br />
<h4>Technologies:</h4>
<ul>
 	<li>Backend: MySQL, MongoDB</li>
 	<li>Frontend: React.js, Wordpress, HTML, CSS, JavaScript ES6,</li>
 	<li>Frameworks: Bootstrap, Bulma, Semantic UI</li>
 	<li>Editors: Photoshop, Illustrator</li>
</ul>




        </div>
        </div>

</section>

    )
}

export default About;