import React from 'react';

function Header(props) {
    return(
        <header className="d-flex justify-content-between">
           <h1>Robyn's Portfolio</h1>
           {props.children}
        </header>
    )
}

export default Header;