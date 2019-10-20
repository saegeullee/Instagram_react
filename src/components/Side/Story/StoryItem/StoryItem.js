import React from "react"
import ProfileImg from "../../../UI/ProfileImg/ProfileImg"
import classes from "./StoryItem.module.css"

const storyItem = props => (

    <div className={classes.StoryItem}>
        <ProfileImg size="small" />
        <div className={classes.StoryItemInfo}>
            <span className={classes.StoryItemName}>{props.name}</span>
            <span className={classes.StoryItemTime}>11시간전</span>
        </div>
    </div>

)

export default storyItem