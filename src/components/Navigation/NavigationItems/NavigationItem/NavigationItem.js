import React from "react";
import classes from "./NavigationItem.module.css"
import explore from "../../../../images/explore.png"
import likes from "../../../../images/likes.png"
import user from "../../../../images/user.png"

const navigationItem = props => {

    let imgSrc = "";

    switch(props.type) {
        case "explore":
            imgSrc = <img src={explore} className={classes.UserNavImg} alt="explore"></img>
            break;
        case "likes":
            imgSrc = <img src={likes} className={classes.UserNavImg} alt="likes"></img>
            break;
        case "user":
            imgSrc = <img src={user} className={classes.UserNavImg} alt="user"></img>
            break;
        default:
    }

    return (
        <div>
            {imgSrc}
        </div>
    )
}

export default navigationItem;
