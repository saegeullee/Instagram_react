import React from "react"
import classes from "./FeedPostComment.module.css"

const feedPostComment = props => (

    <form action="" className={classes.FeedCommentForm}>
        <input type="text" placeholder="댓글 달기.." className={classes.FeedCommentInput}></input>
        <a href="" className={classes.FeedCommentBtn}>게시</a>
    </form>
)

export default feedPostComment