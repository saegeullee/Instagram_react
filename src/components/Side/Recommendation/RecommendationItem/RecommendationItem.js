import React from "react"
import ProfileImg from "../../../UI/ProfileImg/ProfileImg"
import classes from "./RecommendationItem.module.css"

const recommendationItem = props => (

    <div className={classes.RecommendationItem}>
        <ProfileImg size="small" />
        <div className={classes.RecommendationItemInfo}>
            <span className={classes.RecommendationItemName}>saegeullee</span>
            <span className={classes.RecommendationItemFollower}>o__ohbitna님 외 5명이 팔로...</span>
        </div>
        <a href="" className={classes.RecommendationItemFollowBtn}>팔로우</a>
    </div>
)

export default recommendationItem