import React from 'react';
import github from '../../assets/images/git-hub.png'
import linkedin from '../../assets/images/linkedin.png'
import laptop from '../../assets/images/laptop-code-solid-color-sm.png'
import mail from '../../assets/images/envelope-solid-color.png'
function Footer() {
    return(
        <footer>
              <a href='mailto:robyn@sitereworks.com' target='_blank' rel='noreferrer'><img src={mail} className="icon" height="25px" alt='Email' /></a>
<a href="https://github.com/robyng"><img src={github} className="icon" height="25px" alt='' /></a>
<a href="https://www.linkedin.com/in/robyn-graham-b067aa97/"><img src={linkedin} className="icon" height="25px" alt='' /></a>
<a href="https://www.sitereworks.com/"><img src={laptop} className="icon" height="25px" alt='' /></a>
<br/>
           <p>&copy; {(new Date().getFullYear())} Robyn Graham</p>
        </footer>
    )
}

export default Footer;