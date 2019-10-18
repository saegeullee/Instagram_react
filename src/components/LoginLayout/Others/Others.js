import React from "react"
import classes from "./Others.module.css"

const others = props => (

    <div className={classes.Others}>
        <div className={classes.OrLiner} >
            <div className={classes.LineLeft}>
            </div>
            <div className={classes.OrText}>
                또는
            </div>
            <div className={classes.LineRight}>
            </div>
        </div>
        <div className={classes.FaceBookLogin}>
            Facebook으로 로그인
        </div>
        <div className={classes.ForgetPassword}>
            비밀번호를 잊으셨나요?
        </div>
    </div>
)

export default others