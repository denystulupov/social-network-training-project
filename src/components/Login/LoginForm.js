import React from 'react';
import {Field, reduxForm} from "redux-form";
import classes from './LoginForm.module.css'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
            <div className={classes.items}>
                <Field name='email' component={Input}
                       placeholder='Email' validate={[required]}/>
            </div>

            <div className={classes.items}>
                <Field name='password' component={Input}
                       type='password' placeholder='Password' validate={[required]}/>
            </div>

            <div className={classes.items}>
                <label htmlFor="rememberMe">Remember me</label>
                <Field id="rememberMe" name='rememberMe' component='input' type='checkbox'/>
            </div>
            {
                props.error && <div className={classes.error}>{props.error}</div>
            }

            <div className={classes.items}>
                <button>Login</button>
            </div>
        </form>
    )
};

export default reduxForm({form: 'login'})(LoginForm)