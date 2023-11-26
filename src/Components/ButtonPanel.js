import React from "react";
import Button from "./Button"
import './ButtonPanel.css'

const ButtonPanel = (props) => {


    return(
        <div className="cointainer-button-panel">
            <div className="component-button-panel">
                <div>
                    <Button name="AC" buttonClickHandler={props.clearClickHandler} />
                    <Button name="C" buttonClickHandler={props.clearClickHandler} />
                    <Button name="." buttonClickHandler={props.clickHandler} />
                    <Button name="/" buttonClickHandler={props.clickHandler} />
                </div>
                <div>
                    <Button name="1" buttonClickHandler={props.clickHandler} />
                    <Button name="2" buttonClickHandler={props.clickHandler} />
                    <Button name="3" buttonClickHandler={props.clickHandler} />
                    <Button name="+" buttonClickHandler={props.clickHandler} />
                </div>
                <div >
                    <Button name="4" buttonClickHandler={props.clickHandler} />
                    <Button name="5" buttonClickHandler={props.clickHandler} />
                    <Button name="6" buttonClickHandler={props.clickHandler} />
                    <Button name="-" buttonClickHandler={props.clickHandler} />
                </div>
                <div >
                    <Button name="7" buttonClickHandler={props.clickHandler} />
                    <Button name="8" buttonClickHandler={props.clickHandler} />
                    <Button name="9" buttonClickHandler={props.clickHandler} />
                    <Button name="*" buttonClickHandler={props.clickHandler} />
                </div>
                <div >
                    <Button name="0" buttonClickHandler={props.clickHandler} />
                    <Button name="=" buttonClickHandler={props.clickHandler} />
                </div>
            </div>
        </div>

    );
}

export default ButtonPanel;