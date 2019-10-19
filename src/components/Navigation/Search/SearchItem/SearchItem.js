import React from "react"
import classes from "./SearchItem.module.css"
import ProfileImage from "../../../UI/ProfileImg/ProfileImg"

const searchItem = props => (

    <div className={classes.SearchItem}>
        <ProfileImage size="small" />
        <div className={classes.SearchItemInfo}>
            <span className={classes.SearchItemName}>{props.name}</span>
        </div>
    </div>

)

export default searchItem