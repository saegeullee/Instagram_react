import React from "react"
import classes from "./Form.module.css"
import Input from "../../UI/Input/Input"
import Button from "../../UI/Button/Button"

const form = props => {

    let signupSuccessNoticeText = ""

    if(props.signupSuccess) {
        signupSuccessNoticeText = (
            <div
                className={classes.SingupSuccessNotice}>
                회원가입 성공!
            </div>
        )
    }

    return(
        <>
            <div className={classes.LoginForm}>
                <Input 
                    value={props.emailVal}
                    inputFilled={props.emailInput} 
                    placeholder="전화번호, 사용자 이름 또는 이메일"/>
                <Input
                    value={props.passwordVal} 
                    inputFilled={props.passwordInput} 
                    placeholder="비밀번호"/>
            </div>
            <Button 
                bothFilled={props.bothFilled} 
                clicked={props.isLogin ? props.loginBtnClicked : props.signupBtnClicked}>
                {props.isLogin ? "로그인" : "회원가입"}
            </Button>
            <div
                className={classes.LoginSignupSwitchNotice}
                onClick={props.loginSignupSwitch}>
                {!props.isLogin ? "로그인하기" : "회원가입하기"}
            </div>
            {signupSuccessNoticeText}
        </>
    )
}

export default form