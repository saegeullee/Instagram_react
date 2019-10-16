import React, {Component} from "react"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Container from "../Container/Container"

class Layout extends Component {

    constructor() {
        super()
        this.state = {
            isLikeBtnClicked : false,
            isBookMarkBtnClicked : false,
        }
    }

    likeBtnClickHander = () => {
        this.setState({isLikeBtnClicked : !this.state.isLikeBtnClicked})
    }

    bookMarkBtnClickHandler = () => {
        this.setState({isBookMarkBtnClicked : !this.state.isBookMarkBtnClicked})
    }

    render() {

        return(
            <div>
                <Toolbar />
                <Container
                    isLiked={this.state.isLikeBtnClicked} 
                    liked={this.likeBtnClickHander}
                    isBookMarked={this.state.isBookMarkBtnClicked}
                    bookMarked={this.bookMarkBtnClickHandler}
                />
            </div>
        )
    }
}
export default Layout;
