import React from "react"
import Profile from "./Profile/Profile"
import Story from "./Story/Story"
import Recommendation from "./Recommendation/Recommendation"
import classes from "./Side.module.css"

const side = props => (
    <div className={classes.Side}>
        <Profile />
        <Story />
        <Recommendation />
    </div>
)

export default side