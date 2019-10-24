import React from "react"
import classes from "./FeedPostComment.module.scss"

const feedPostComment = props => (

    <form action="" 
        onSubmit={(event) => {props.addComment(event, props.id)}} 
        className={classes.FeedComment}>
        <input 
            type="text" 
            value={props.commentValue} 
            placeholder="댓글 달기.."
            className={classes.FeedComment__Input} 
            onChange={(event) => props.handleInput(event, props.id)}></input>
        <button 
            className={ props.commentValue!=="" ? classes["FeedComment__Btn--Activated"] :
            classes["FeedComment__Btn--Deactivated"]}>게시</button>
    </form>
)

export default feedPostComment