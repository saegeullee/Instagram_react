import React from "react"
import classes from "./FeedPostComment.module.css"

const feedPostComment = props => (

    <form action="" 
        onSubmit={(event) => {props.addComment(event, props.id)}} 
        className={classes.FeedCommentForm}>
        <input 
            type="text" 
            value={props.commentValue} 
            placeholder="댓글 달기.." 
            className={classes.FeedCommentInput} 
            onChange={(event) => props.handleInput(event, props.id)}></input>
        <button 
            className={ props.commentValue!=="" ? classes.FeedCommentBtnActivated 
            : classes.FeedCommentBtn}>게시</button>
    </form>
)

export default feedPostComment