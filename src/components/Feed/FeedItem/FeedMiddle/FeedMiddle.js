import React from "react"
import womanImg from "../../../../images/woman.jpg"
import classes from "./FeedMiddle.module.scss"

const feedMiddle = props => (

    <img src={womanImg} alt="woman" className={classes.FeedMiddleImg}></img>
)

export default feedMiddle