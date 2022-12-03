import React from "react";
import './styles.css';
import Button from "../button";


const Navbar = ({}) => {
    return (
        <div className="navbar-menu col-12">
                <h2 className="navbar-logo col-md-3 col.sm-2">🐱‍🚀</h2>
                <div className="navbar-item col-md-9 col-sm-10">
                <Button text={"categoria 1"}></Button>
                <Button text={"categoria 2"}></Button>
                <Button text={"categoria 3"}></Button>
                <Button text={"categoria 4"}></Button>
                </div>
        </div>
    )
}

export default Navbar;