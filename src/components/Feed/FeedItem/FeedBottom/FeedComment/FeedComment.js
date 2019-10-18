import React from "react"
import classes from "./FeedComment.module.css"

const feedComment = props => (

    <div className={classes.FeedCommentPart}>
        <div>
            mmmmmmmmmahh
        </div>
        <div className={classes.FeedComment}>
            {props.comment}
        </div>
    </div>
)

export default feedComment