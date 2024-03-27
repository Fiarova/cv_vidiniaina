import React from "react";
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return(
        <div className="sidebar">
            <div className="id">
                <div className="idcontent">
                <img src="./media/vidin.jpg" alt="profil-pic" width="50%"/>
                <h3> FIAROVA Zafinirina Vidiniaina Josephine</h3>
                </div>
             </div> 
             <div className="navigation">
             <ul>
                <li>
                <NavLink exact to="/" activeClassName="navActive">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
                </NavLink>
                </li>

                <li>
                <NavLink exact to="/competence" activeClassName="navActive">
                <i className="fas fa-mountain"></i>
                <span>competence</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/portfolios" activeClassName="navActive">
                <i className="fas fa-images"></i>
                <span>portfolios</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/contact" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>contact</span>
                </NavLink>
                </li>

                <li>
                <NavLink exact to="/conInfo" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>connaissance en informatique</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/diplome" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>diplome obtenue</span>
                </NavLink>
               </li>

                <li>
                <NavLink exact to="/formation" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>formation obtenue</span>
                </NavLink>
                </li>

                <li>
                <NavLink exact to="/hobbies" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>centre d' interet</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact to="/language" activeClassName="navActive">
                <i className="fas fa-address-book"></i>
                <span>conaissance linguistique</span>
                </NavLink>
                </li>
             </ul>
             </div>

             <div className="socialNetwork">
                <ul>
                    <li>
                    <a href="htts://www.google.com" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
                    </li>

                    <li>
                    <a href="htts://www.google.com" target="_blank" rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                    </li>

                    <li>
                    <a href="htts://www.google.com" target="_blank" rel="noopener noreferrer" ><i className="fab fa-twitter"></i></a>
                    </li>

                    <li>
                    <a href="htts://www.google.com" target="_blank" rel="noopener noreferrer" ><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
                
                <div className="signature">
                <p>by vidiniaina = 2024</p>
                </div>

             </div>


            
        </div>

     
    );
};
export default Navigation;