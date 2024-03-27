import React from "react";
import { NavLink } from "react-router-dom";


const Notfound = () => {
    return(
        <div className="noutfound">
            <div className="noutfoundContent">
            <h3>Désolé cette page n'existe pas !</h3>
            <NavLink exact to="/">
            <i className="fas fa-home"></i>
            <span>Accueil</span>
            </NavLink>
            </div>
            
        </div>
    );
};
export default Notfound;