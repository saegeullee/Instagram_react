import React from "react"
import Feed from "../Feed/Feed"
import Side from "../Side/Side"
import classes from "./Container.module.css"

const container = props => (

    <div className={classes.Container} onClick={props.hideTemporarilyShownElement}>
        <Feed
            feedItems = {props.feedItems}
            handleInput = {props.handleInput}
            addComment={props.addComment}
            liked={props.liked}
            bookMarked={props.bookMarked}
            isMenuClicked = {props.isMenuClicked}
            menuClicked = {props.menuClicked}
            hideTemporarilyShownElement = {props.hideTemporarilyShownElement}
        />
        <Side 
            users={props.users}
        />
    </div>

)

export default container