import React from "react"
import classes from "./Button.module.css"

const button = props => (
    <button
        disabled={!props.bothFilled}
        className={props.bothFilled ? classes.LoginFormBtnActive : classes.LoginFormBtn}
        onClick={props.clicked}>{props.children}</button>
)

export default button