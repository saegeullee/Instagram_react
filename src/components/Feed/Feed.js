import React, {Component} from "react"
import FeedItem from "./FeedItem/FeedItem"
import FeedData from "./FeedData"

class Feed extends Component {

    // 댓글 value 상태 하나 추가

    constructor() {
        super()
        this.state = {
            feedItems : FeedData
        }
    }

    likeBtnClickHandler = (id) => {
        this.state.feedItems.forEach((el, idx) => {
            if(el.id === id) {
                el.isLikeBtnClicked = !this.state.feedItems[idx].isLikeBtnClicked;
            }
        })
        this.setState({feedItems : this.state.feedItems});
    }

    bookMarkBtnClickHandler = (id) => {
        this.state.feedItems.forEach((el, idx) => {
            if(el.id === id) {
                el.isBookMarkBtnClicked = !this.state.feedItems[idx].isBookMarkBtnClicked;
            }
        })
        this.setState({feedItems : this.state.feedItems});
    }

    addCommentHandler = (event, id) => {
        event.preventDefault();
        this.state.feedItems.forEach(el => {
            if(el.id === id && el.commentValue !== "") {
                el.comments.push(el.commentValue)
                el.commentValue = ""
            }
        })
        this.setState({feedItems : this.state.feedItems});
    }

    inputBtnColorChangeHandler = (event, id) => {
        this.state.feedItems.forEach(el => {
            if(el.id === id) { 
                el.commentValue=event.target.value;
            }else { 
            }
        })
        this.setState({feedItems : this.state.feedItems})
    }

    render() {

        let feeds = []

        const feedItems = this.state.feedItems

        feeds = feedItems.map((el, idx) => <FeedItem
            key = {feedItems[idx].id}
            handleInput = {this.inputBtnColorChangeHandler}
            id = {feedItems[idx].id}
            commentValue={feedItems[idx].commentValue}
            comments = {feedItems[idx].comments}
            isLiked={feedItems[idx].isLikeBtnClicked} 
            liked={this.likeBtnClickHandler}
            isBookMarked={feedItems[idx].isBookMarkBtnClicked}
            addComment={this.addCommentHandler}
            bookMarked={this.bookMarkBtnClickHandler}/>)

        return(
            <section>
                {feeds}
            </section>
        )
    }
}

export default Feed;