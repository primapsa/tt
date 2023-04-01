import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {StateType} from "./types";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {};

function App (props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div>
                    <Route path='/profile' component={Profile} />
                    <Route path='/messages' component={DialogsContainer} />
                    <Route path='/users' component={UsersContainer} />
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
