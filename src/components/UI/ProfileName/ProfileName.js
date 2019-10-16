import React from "react"
import classes from "./ProfileName.module.css"

const profileName = props => (
    <span className={props.bold === "true" ? classes.ProfileNameBold : classes.ProfileName}>name__skyblue</span>
)

export default profileName