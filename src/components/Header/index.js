import React from 'react';

function Header(props) {
    return(
        <section className="d-flex justify-content-between">
           <h1>Robyn's Portfolio</h1>
           {props.children}
        </section>
    )
}

export default Header;