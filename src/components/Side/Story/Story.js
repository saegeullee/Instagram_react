import React from "react"
import StoryItem from "./StoryItem/StoryItem"
import StoryHeader from "./StoryHeader/StoryHeader"
import classes from "./Story.module.css"

const story = props => (
    <div className={classes.Story}>
        <StoryHeader />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
    </div>
)

export default story