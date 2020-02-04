import React from 'react';
import classes from "./Header.module.css"
import logo from "../../Components/logo.png"

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={logo} alt="logo" />
            <h1>Реакт - это просто!</h1>
        </div>

    )
};
export default Header