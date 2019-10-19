import React from "react";
import {Route, Switch} from "react-router-dom"
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"

const App = props => (
    <>
        <Switch>
            <Route path="/home" component={Main} />
            <Route path="/" exact component={Login} />
        </Switch>
    </>
)

export default App;
