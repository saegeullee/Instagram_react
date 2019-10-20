import React from "react"
import FeedEnage from "./FeedEngage/FeedEngage"
import FeedLikes from "./FeedLikes/FeedLikes"
import FeedDescription from "./FeedDescription/FeedDescription"
import FeedComment from "./FeedComment/FeedComment"
import FeedDate from "./FeedDate/FeedDate"
import FeedPostComment from "./FeedPostComment/FeedPostComment"

const feedBottom = props => {

    let comments = props.comments.map((el, idx) => <FeedComment key={idx} comment={el}/>)
    
    return(
    <div> 
        <FeedEnage 
            id={props.id}
            isLiked={props.isLiked}
            liked={props.liked}
            isBookMarked={props.isBookMarked}
            bookMarked={props.bookMarked}/>
        <FeedLikes />
        <FeedDescription />
        {comments}
        <FeedDate /> 
        <FeedPostComment 
            id={props.id} 
            commentValue={props.commentValue}
            addComment={props.addComment}
            handleInput={props.handleInput}/>
    </div>
    )
}
export default feedBottom