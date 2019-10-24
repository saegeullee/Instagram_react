import React, {Component} from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import classes from "./LoginLayout.module.css"
import LogoImg from "../../images/logo.png"
import Form from "./Form/Form"
import Others from "./Others/Others"

class LoginLayout extends Component {
    
    constructor() {
        super()
        this.state = {
            email : "",
            password: "",
            bothFilled: false,
            isLogin : true,
            isSignupSuccess : false
        }
    }

    loginBtnClickHandler = () => {
        const loginData = {
            email : this.state.email,
            password : this.state.password
        }

        axios.post('http://localhost:8000/account/login', loginData)
            .then(response => {
                console.log(response);
                if(response.data.message === "LOGIN_SUCCESS") {
                    this.props.history.push('/home')
                 }
            })
    }

    signupBtnClickHandler = () => {
        const signupData = {
            email : this.state.email,
            password : this.state.password
        }

        axios.post('http://localhost:8000/account/signup', signupData)
            .then(response => {
                console.log(response);
                console.log(response.data.message)
                if(response.data.message === "SIGNUP_SUCCESS") {
                    console.log("asdf")
                    this.setState({email : "", password : "", isSignupSuccess : true})
                }
            })
    }

    loginBtnColorIndentifier = () => {
        if(this.state.email !== "" && this.state.password !== "") {
            this.setState({bothFilled : true})
        } else {
            this.setState({bothFilled : false})
        }
    }

    emailInputHandler = (event) => {
        this.setState({email : event.target.value}, () => {
            this.loginBtnColorIndentifier()
        })
    }

    passwordInputHandler = (event) => {
        this.setState({password : event.target.value}, () => {
            this.loginBtnColorIndentifier()
        })
    }

    loginSignupSwitchHanlder = () => {
        this.setState((prevState) => ({isLogin : !prevState.isLogin, isSignupSuccess : false}))
    }

    render() {

        return (
            <div className={classes.Main}>
                <div className={classes.LoginSection}>
                    <div className={classes.LoginWrapper}>
                        <img src={LogoImg} alt="" className={classes.Logo}></img>
                        <Form
                            signupSuccess = {this.state.isSignupSuccess}
                            emailVal = {this.state.email}
                            passwordVal = {this.state.password}
                            loginBtnClicked={this.loginBtnClickHandler}
                            signupBtnClicked={this.signupBtnClickHandler}
                            emailInput={this.emailInputHandler} 
                            passwordInput={this.passwordInputHandler}
                            bothFilled={this.state.bothFilled}
                            isLogin={this.state.isLogin}
                            loginSignupSwitch={this.loginSignupSwitchHanlder}
                        />
                        <Others />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginLayout)