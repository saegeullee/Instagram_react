import React from "react"
import Feed from "../Feed/Feed"
import Side from "../Side/Side"
import classes from "./Container.module.css"

const container = props => (

    <div className={classes.Container}>
        <Feed
            isLiked={props.isLiked} 
            liked={props.liked}
            isBookMarked={props.isBookMarked}
            bookMarked={props.bookMarked} />
        <Side />
    </div>

)

export default container