import React from 'react'
import "./SideBarsOption.css"

//function that return a component
const SideBarsOption = ({active, text, Icon}) => {
    return (
        <div className={`sidebarsOption ${active && 'sidebarsOption--active' }`}>
            <Icon />
            <h2>{text}</h2>           
        </div>
    )
}

export default SideBarsOption
