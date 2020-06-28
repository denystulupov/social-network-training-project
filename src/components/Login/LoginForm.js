import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './LoginForm.module.css'

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
            <div className={classes.items}>
                <Field name='login' component='input' placeholder='Login'/>
            </div>

            <div className={classes.items}>
                <Field name='password' component='input' type='password' placeholder='Password'/>
            </div>

            <div className={classes.items}>
                <label htmlFor="rememberMe">Remember me</label>
                <Field id="rememberMe" name='rememberMe' component='input' type='checkbox'/>
            </div>

            <div className={classes.items}>
                <button>Login</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm)