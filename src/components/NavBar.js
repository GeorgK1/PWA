import React from "react";

function Navbar(props) { 
    return (
        <nav className="navbar">
             <a className="nav-title">{props.title}</a>
             <a className="nav-menu" href="#">{props.icon}</a>
        </nav>
    );

    
}

export default Navbar