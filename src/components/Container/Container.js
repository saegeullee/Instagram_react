import React from "react"
import Feed from "../Feed/Feed"
import Side from "../Side/Side"
import classes from "./Container.module.css"

const container = props => (

    <div className={classes.Container}>
        <Feed />
        <Side />
    </div>

)

export default container