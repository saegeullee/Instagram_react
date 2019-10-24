import React, {Component} from "react"
import { withRouter } from 'react-router-dom'
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
            bothFilled: false
        }
    }

    loginBtnClickedHandler = () => {
        this.props.history.push('/home')
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

    render() {

        return (
            <div className={classes.Main}>
                <div className={classes.LoginSection}>
                    <div className={classes.LoginWrapper}>
                        <img src={LogoImg} alt="" className={classes.Logo}></img>
                        <Form
                            clicked={this.loginBtnClickedHandler}
                            emailInput={this.emailInputHandler} 
                            passwordInput={this.passwordInputHandler}
                            bothFilled={this.state.bothFilled}/>
                        <Others />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginLayout)