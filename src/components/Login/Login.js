import React from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../reducers/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = ({email, password, rememberMe, captcha}) => {
        props.login(email, password, rememberMe, captcha)
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h2>LOGIN</h2>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </>
    )
};

const MapStateToProps = state => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
};

export default connect(MapStateToProps, {login})(Login)