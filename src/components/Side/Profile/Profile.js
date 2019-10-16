import React from "react"
import ProfileImg from "../../UI/ProfileImg/ProfileImg"
import ProfileName from "../../UI/ProfileName/ProfileName"
import classes from "./Profile.module.css"

const profile = props => (
        <div className={classes.Profile}>
            <ProfileImg size="big"/>
            <ProfileName bold="true"/>
        </div>
)

export default profile