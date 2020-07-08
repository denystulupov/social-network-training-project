import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./reducers/app-reducer";
import Spinner from "./components/Spinner/Spinner";
import {withSuspense} from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized) return <Spinner/>

        return (
            <>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <div className='app-wrapper-body'>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path='/dialogs' component={withSuspense(DialogsContainer)}/>

                            <Route path='/profile/:userId?' component={withSuspense(ProfileContainer)}/>

                            <Route path='/users' component={UsersContainer}/>

                            <Route path='/login' component={Login}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};

export default connect(mapStateToProps, {initializeApp})(App);