import React, {Component} from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Feed from "../Feed/Feed"
import classes from "./Layout.module.css";

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
                <div className={classes.Container}>
                    <main className={classes.Main}>
                        <Feed 
                            isLiked={this.state.isLikeBtnClicked} 
                            liked={this.likeBtnClickHander}
                            isBookMarked={this.state.isBookMarkBtnClicked}
                            bookMarked={this.bookMarkBtnClickHandler} />
                    </main>
                </div>
            </div>
        )
    }
}
export default Layout;
