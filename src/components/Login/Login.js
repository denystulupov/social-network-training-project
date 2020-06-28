import React from 'react';
import LoginForm from "./LoginForm";

const Login = () => {

    const onSubmit = formData => {
        console.log(formData)
    }

    return (
        <>
            <h2>LOGIN</h2>
            <LoginForm onSubmit={onSubmit}/>
        </>
    )
};

export default Login