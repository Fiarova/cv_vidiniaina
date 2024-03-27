import React from "react";
import "./FormationExperience.css"
import dataFormation from "../datas/Formations";
import Formation from "./Formation";
import dataExperience from "../datas/Experience";
import Experience from "./Experience";
//
function FormationExperiences () {
  
    return  (
    <>
    
    <Formation datas={dataFormation}/> 
    <Experience datas={dataExperience}/>
     </>
    )
}

export default FormationExperiences;