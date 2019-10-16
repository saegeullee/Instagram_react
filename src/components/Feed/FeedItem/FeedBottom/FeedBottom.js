import React from "react"
import FeedEnage from "./FeedEngage/FeedEngage"
import FeedLikes from "./FeedLikes/FeedLikes"
import FeedDescription from "./FeedDescription/FeedDescription"
import FeedComment from "./FeedComment/FeedComment"
import FeedDate from "./FeedDate/FeedDate"
import FeedPostComment from "./FeedPostComment/FeedPostComment"

const feedBottom = props => (

    <div>
        <FeedEnage 
            isLiked={props.isLiked}
            liked={props.liked}
            isBookMarked={props.isBookMarked}
            bookMarked={props.bookMarked}/>
        <FeedLikes />
        <FeedDescription />
        <FeedComment />
        <FeedComment />
        <FeedComment />
        <FeedDate />
        <FeedPostComment />
    </div>
)
export default feedBottom