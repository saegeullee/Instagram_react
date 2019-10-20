import React from "react"
import FeedItem from "./FeedItem/FeedItem"

const feed = props => {

        let feeds = []

        const feedItems = props.feedItems

        feeds = feedItems.map((el, idx) => <FeedItem
            key = {feedItems[idx].id}
            id = {feedItems[idx].id} 
            comments={feedItems[idx].comments}
            commentValue={feedItems[idx].commentValue}
            isLiked={feedItems[idx].isLikeBtnClicked} 
            isBookMarked={feedItems[idx].isBookMarkBtnClicked}
            handleInput = {props.handleInput}
            liked={props.liked}
            bookMarked={props.bookMarked}
            addComment={props.addComment} />)

        return(
            <section>
                {feeds}
            </section>
        )
}

export default feed;