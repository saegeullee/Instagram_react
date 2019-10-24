import React from "react"
import classes from "./Input.module.css"

const input = props => (

    <input type="text" 
        onChange={props.inputFilled}
        className={classes.Input} 
        placeholder={props.placeholder}
        value={props.value}>
    </input>

)

export default input