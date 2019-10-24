import React from "react"
import StoryItem from "./StoryItem/StoryItem"
import StoryHeader from "./StoryHeader/StoryHeader"
import classes from "./Story.module.css"

const story = props => {

    let storyItems = []

    storyItems = props.users.map(el => <StoryItem key={el.name} name={el.name}/>)
    
    return(
        <div className={classes.Story}>
            <StoryHeader />
            <div className={classes.StoryItems}>
                {storyItems}
            </div>
        </div>
    )
}

export default story