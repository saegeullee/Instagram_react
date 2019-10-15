import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Feed from "../Feed/Feed"
import classes from "./Layout.module.css";

const layout = props => (
    <div>
        <Toolbar />
        <div className={classes.Container}>
            <main className={classes.Main}>
                <Feed />
            </main>
        </div>
    </div>
)
export default layout;
