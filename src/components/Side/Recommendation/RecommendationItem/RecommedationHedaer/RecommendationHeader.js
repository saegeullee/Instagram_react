import React from "react"
import classes from "./RecommendationHeader.module.css"

const recommendationHeader = props => (
    <div className={classes.RecommendationHeader}>
        <span className={classes.RecommendationHeaderTitle}>회원님을 위한 추천</span>
        <span className={classes.RecommendationHeaderNotice}>모두보기</span>
    </div>
)

export default recommendationHeader