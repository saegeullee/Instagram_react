import React, {Component} from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Container from "../Container/Container"
import {feedData, users} from "../../data/data"

class Layout extends Component {

    constructor() {
        super()
        this.state = {
            feedItems : feedData,
            users : users,
            usersForStory : users,
            isSearching : false
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
            }
        })
        this.setState({feedItems : this.state.feedItems})
    }

    searchHandler = (event) => {

        const filteredUsers = []
        this.state.users.forEach(el => {
            el.name.startsWith(event.target.value)
                ? filteredUsers.unshift(el)
                : filteredUsers.push(el)
        })

        this.setState({users: filteredUsers})

        if(event.target.value !== "") {
            this.setState({isSearching : true})
        } else {
            this.setState({isSearching : false})
        }
    }

    hideSearchBoxHandler = () => {
        if(this.state.isSearching) {
            this.setState({isSearching :false})
        }
    }

    render() {

        return(
            <div>
                <Toolbar
                    hideSearchBox = {this.hideSearchBoxHandler}
                    isSearching = {this.state.isSearching}
                    searched = {this.searchHandler} 
                    users={this.state.users}
                />
                <Container
                    users={this.state.usersForStory}
                    hideSearchBox = {this.hideSearchBoxHandler}
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