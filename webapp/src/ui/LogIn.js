import './LogIn.css';
import React from 'react';
import {Grid } from '@material-ui/core'
import LoginButton from "./LoginButtons"

function LogIn(props) {
    return (
        <section style={{ display: "inline-block" }}>
            <div style={{ paddingTop: "10%" }}>
                <img src="TracingApp-01.jpg" width="400" height="700" alt="logo" />
            </div>
            <Grid className="container-buttons" container direction="column">
                <LoginButton className="loginButton" />
            </Grid>
            <a href={window.location.origin+"/radmin"}>Accede como administrador</a>
        </section>
    )
}
export default LogIn;