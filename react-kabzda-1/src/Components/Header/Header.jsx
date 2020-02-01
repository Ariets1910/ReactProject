import React from 'react';
import classes from "./Header.module.css"
import logo from "../../Components/logo.png"

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={logo} alt="logo" />
        </div>
    )
};
export default Header