import React from "react"
import classes from "./StoryHeader.module.css"

const storyHeader = props => (
    <div className={classes.StoryHeader}>
        <span className={classes.StoryHeaderTitle}>스토리</span>
        <span className={classes.StoryHeaderNotice}>모두보기</span>
    </div>
)

export default storyHeader