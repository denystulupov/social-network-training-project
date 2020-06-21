import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <>
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-body'>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' component={DialogsContainer}/>

                        <Route path='/profile/:userId?' component={ProfileContainer}/>

                        <Route path='/users' component={UsersContainer}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default App;