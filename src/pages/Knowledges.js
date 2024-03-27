import React from "react";
import Navigation from "../component/Navigation";
import Langages from "../component/knowledges/Langages";
import Experience from "../component/knowledges/Experience";
import OtherKills from "../component/knowledges/OtherKills";
import Hobbies from "../component/knowledges/Hobbies";
import Diplome from "../component/knowledges/Diplome";
const Knowledges = () => {
    return(
        <div>
            <Navigation/>
            <div className="knowledges">
                <Langages/>
                <Experience/>
                <OtherKills/>
                <Hobbies/>
                <Diplome/>
                
            </div>
        </div>
    );
};

export default Knowledges;