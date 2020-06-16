import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-body'>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' component={DialogsContainer}/>

                        <Route path='/profile' component={Profile}/>

                        <Route path='/users' component={UsersContainer}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;