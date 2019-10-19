import React from "react"
import { Link } from "react-router-dom"
import classes from "./Form.module.css"

const form = props => {

    return(
        <>
            <div className={classes.LoginForm}>
                <div>
                    <input type="text" 
                        onChange={props.emailInput}
                        className={classes.LoginInput} 
                        placeholder="전화번호, 사용자 이름 또는 이메일" >
                    </input>
                </div>
                <div>
                    <input type="password"
                        onChange={props.passwordInput} 
                        className={classes.LoginInput} 
                        placeholder="비밀번호">
                    </input>
                </div>
            </div>
            <Link to="/home"
                disabled={!props.bothFilled}
                className={props.bothFilled ? classes.LoginFormBtnActive : classes.LoginFormBtn}
                onClick={props.clicked}>로그인</Link>
        </>
    )
}

export default form