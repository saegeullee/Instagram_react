import React from "react"
import FeedHeader from "./FeedHeader/FeedHeader"
import FeedMiddle from "./FeedMiddle/FeedMiddle"
import FeedBottom from "./FeedBottom/FeedBottom"
import classes from "./Feed.module.css"

const feed = props => (
    <section>
        <div className={classes.FeedItem}>
            <FeedHeader />
            <FeedMiddle />
            <FeedBottom />
        </div>
    </section>
)

export default feed;