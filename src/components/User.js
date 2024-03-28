import React from "react";
import "./User.css";

function User() {
    return  (
      <div className='user'>
        <img src="./images/vidin.jpg" alt="" width="50%" className="user__avatar"/>
        <h1 className="user__name">FIAROVA Zafinirina Vidiniaina Josephine </h1>
        <p className="user__profession"> developpeur Web</p>
        <p className="user__info"><i className="fas fa-home"></i>ambalanomby </p>
        <div className="user__infos">
            <p className="user__info"><i className="fas fa-phone"></i> <a href="tel:+226343458198"> 034 34 581 98</a>  </p>
            <p className="user__info"><i className="fas fa-user"></i> celibataire, Malagasy</p>
            <p className="user__info"><i className="fas fa-map-marker"></i>06 août 2003 à Belo/tsiribihina</p>
            <p className="user__info"><i className="fas fa-envelope"></i>fiarovavidiniainajosephine@gmail.com</p>
            <p className="user__info"><i className="fas fa-cat"></i>FIAROVA</p>
        </div>

        </div>

     );   
} export default User;