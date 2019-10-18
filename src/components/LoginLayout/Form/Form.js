import React from "react"
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
            <button href="" 
            className={props.bothFilled ? [classes.LoginFormBtn, classes.LoginFormBtnActive].join(" ")
            :classes.LoginFormBtn} 
            id="login-form-button">로그인</button>
        </>
    )
}

export default form