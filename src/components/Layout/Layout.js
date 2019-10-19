import React, {Component} from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Container from "../Container/Container"
import FeedData from "../Feed/FeedData"

class Layout extends Component {

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

        return(
            <div>
                <Toolbar />
                <Container 
                    feedItems = {this.state.feedItems}
                    handleInput = {this.inputBtnColorChangeHandler}
                    liked={this.likeBtnClickHandler}
                    addComment={this.addCommentHandler}
                    bookMarked={this.bookMarkBtnClickHandler}
                />
            </div>
        )
    }
}
export default Layout;


/**
 * 
*                     key = {feedItems[idx].id}
                    handleInput = {this.inputBtnColorChangeHandler}
                    id = {feedItems[idx].id}
                    commentValue={feedItems[idx].commentValue}
                    comments = {feedItems[idx].comments}
                    isLiked={feedItems[idx].isLikeBtnClicked} 
                    liked={this.likeBtnClickHandler}
                    isBookMarked={feedItems[idx].isBookMarkBtnClicked}
                    addComment={this.addCommentHandler}
                    bookMarked={this.bookMarkBtnClickHandler}
 */