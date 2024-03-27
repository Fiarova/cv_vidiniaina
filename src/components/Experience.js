import React from "react";


function Experience({ datas }) {
    return  (
    <div className="cursus mb3">
       <h2 className="h2"> Stage et Experience </h2>
       {datas.map(item =>(
        <div className="grid__row">
        <div className="grid_row" key={item.id}> 
            <div className="grid_item"> 
                <p className="grid_date" > {item.date}  </p> 
        
            </div> 
            <div className="grid_item">
                <h3 className="grid_title" > {item.title} </h3>
                <p className="grid_location" >{ item.location} </p>  
                <p className="grid_text" > {item.text}  </p> 
            </div> 
    
        </div> 
    
    </div> 



       ))}
       
    </div>
    )

}

export default Experience;