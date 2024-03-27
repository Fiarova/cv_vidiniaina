import React from "react";

function Skill({ title, rating }) {
    return (
        <div className='skill'>
            <p className='skill__title'>{title}</p>
            <div className='skill__rating'>
                <div className={`circle ${rating > 0 && "circle-plein"}`}></div>
                <div className={`circle ${rating > 1 && "circle-plein"}`}></div>
                <div className={`circle ${rating > 2 && "circle-plein"}`}></div>
                <div className={`circle ${rating > 3 && "circle-plein"}`}></div>
                <div className={`circle ${rating > 4 && "circle-plein"}`}></div>
            </div>
        </div>
    );
}

export default Skill;