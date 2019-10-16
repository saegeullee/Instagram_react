import React from "react"
import RecommendationItem from "./RecommendationItem/RecommendationItem"
import RecommendationHeader from "./RecommendationItem/RecommedationHedaer/RecommendationHeader"
import classes from "./Recommendation.module.css"

const recommendation =props => (
    <div className={classes.Recommendation}>
        <RecommendationHeader />
        <RecommendationItem />
        <RecommendationItem />
        <RecommendationItem />
    </div>
)

export default recommendation