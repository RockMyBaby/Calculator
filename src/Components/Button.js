import React from "react";
import "./Button.css"

const Button =(props) =>{


    return (
        <div className={props.name==="AC" || props.name==="C" ? "component-clear-button" : "component-button wide" }>
            <button onClick={props.buttonClickHandler} value={props.name}>{props.name}</button>
        </div>
    );
}

export default Button;