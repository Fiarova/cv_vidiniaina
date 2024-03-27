import React from "react";
import Navigation from "../component/Navigation";


const Home = () => {
    return(
        <div className="home">
           <Navigation/>
           <div className="homeContent">
           <div className="content">
           <h1>FIAROVA Zafinirina Vidiniaina Josephine</h1>
           <h2>Developeur Front-end</h2>
           <div className="pdf"><a href="./media/cv.pdf" target="_blank">techarger cv</a> </div>

           </div>
           </div>

        </div>
    );
};
export default Home;