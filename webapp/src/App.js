// External dependences
import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoggedOut, LoggedIn } from "@solid/react";

// Dependences from: ~/ui
import './App.css';
import About from './ui/About';
import {Friends} from './ui/Friends';
import LogIn from './ui/LogIn';
import MapView from './ui/MapView';
import MNavBar from './ui/MNavBar';
import Profile from './ui/Profile';
import PaginaBloqueada from './ui/PaginaBloqueada';
import Admin from './ui/Admin';
import RAdmin from './ui/RAdmin';
import {ListarUsuarios} from './ui/Admin';


function App(props) {

 //pide permisos de notificaciones al usuario
 // Notification.requestPermission();

  return (
    <BrowserRouter>
      <div className="App">
        <LoggedOut>
        <Switch>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/radmin">
            <RAdmin />
          </Route>
          <Route exact path="/administrar">
            <Admin method={ListarUsuarios}/>
          </Route>
          <Route exact path="/error">
            <PaginaBloqueada />
          </Route>
          <Route exact path="/">
            <LogIn />
          </Route>
          </Switch>
        </LoggedOut>
        <LoggedIn>
          <header>
            <MNavBar />
          </header>
          <div style={{ height: "60px" }}>
          </div>
          <Switch>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/perfil">
              <Profile />
            </Route>
            <Route exact path="/amigos">
              <Friends/>
            </Route>
            <Route exact path="/mapa">
              <MapView />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <div>
                <MapView />
              </div>
            </Route>
          </Switch>
        </LoggedIn>
      </div>
    </BrowserRouter>

  )
}

export default App;