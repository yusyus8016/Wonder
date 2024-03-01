import React from 'react';
import './Continents.css';
const ContinentItems = ({src, name, handleClick}) => {

   

    return (
        <div onClick={() => handleClick(name)} className="ContinentItems">
            <img className ="ContinentImg" src={src} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default ContinentItems;