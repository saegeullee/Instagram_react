import React from "react"
import classes from "./ProfileImg.module.css"
import profileImage from "../../../images/woman.jpg"

const profileImg = props => (

    <div className={props.size === "big" ? classes.ProfileImgShapeBig : classes.ProfileImgShapeSmall}>
        <img src={profileImage} alt="" className={classes.ProfileImage}></img>
    </div>

)

export default profileImg