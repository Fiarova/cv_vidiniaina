import React from "react";
import { useState } from "react"

function DarkMode() {
    let clickedClass = "clicked"
    const body = document.body
    const lightThem = "light"
    const darkThem = "dark"
    let theme
    
    const swithTheme = e => {
       if (theme === darkThem) {
        body.classList.replace(darkThem, lightThem)
        e.target.classList.remove(clickedClass)
        localStorage.setItem("theme", "light")
        theme = lightThem
       } else{
        body.classList.replace(lightThem, darkThem)
        e.target.classList.add(clickedClass)
        localStorage.setItem("theme", "dark")
        theme = darkThem

       }
    }
    return <button
     className={theme == "dark" ?  clickedClass : ""}id="darkMode" 
     onClick={e => swithTheme(e)}
     > 
    test
    </button> 
}

export default DarkMode;