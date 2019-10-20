import React from "react"
import classes from "./FeedDescription.module.scss"

const feedDescription = props => (

    <div className={classes.FeedDescription}>
        <div className={classes.FeedDescription__Name}>
            name__skyblue
        </div>
        <div className={classes.FeedDescription__Text}>
            lorem ipsum is the perfect easy tool to generate sentences you need.
        </div>
    </div>

)

export default feedDescription