import React from "react"
import classes from "./FeedHeader.module.scss"
import ProfileImg from "../../../UI/ProfileImg/ProfileImg"
import ProfileName from "../../../UI/ProfileName/ProfileName"
import FeedHeaderMenu from "../../../../images/menu.png"
import FeedMenuPopup from "../../FeedMenuPopup/FeedMenuPopup"


const feedHeader = props => {

    let showPopup;
    if(props.isMenuClicked) {
        showPopup = <FeedMenuPopup hideTemporarilyShownElement={props.hideTemporarilyShownElement} />
    }

    return (
        <div className={classes.FeedHeader}>
            {showPopup}
            <div className={classes.FeedHeader__Profile}>
                <ProfileImg />
                <ProfileName />
            </div>
            <button className={classes.FeedHeader__MenuBtn} onClick={props.menuClicked}>
                <img src={FeedHeaderMenu} alt="FeedHeaderMenu" className={classes.FeedHeader__Menu}></img>
            </button>
        </div>
    )
}

export default feedHeader