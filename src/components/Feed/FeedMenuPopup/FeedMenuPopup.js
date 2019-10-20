import React from "react"
import classes from "./FeedMenuPopup.module.css"

const feedMenuPopup = props => (
    <div className={classes.FeedMenuPopupBackground} onClick={props.hideTemporarilyShownElement}>
        <div className={classes.FeedMenuPopup}>
            <button className={classes.FeedMenuPopupEl}>부적절한 콘텐츠 신고</button>
            <button className={classes.FeedMenuPopupEl}>팔로우 취소</button>
            <button className={classes.FeedMenuPopupEl}>게시물로 이동</button>
            <button className={classes.FeedMenuPopupEl}>퍼가기</button>
            <button className={classes.FeedMenuPopupEl}>공유하기</button>
            <button className={classes.FeedMenuPopupEl}>링크 복사하기</button>
            <button className={classes.FeedMenuPopupEl}>취소</button>
        </div>
    </div>
)

export default feedMenuPopup