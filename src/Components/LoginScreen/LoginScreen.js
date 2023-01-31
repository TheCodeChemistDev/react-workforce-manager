import React, { useState } from 'react';
import './UsernameInput/UsernameInput';
import UsernameInput from './UsernameInput/UsernameInput';
import PasswordInput from './PasswordInput/PasswordInput';

const LoginScreen = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const handleClick = () => {
        //TODO: Add backend logic to check user against
        const logInSuccess = props.logIn(username, password);
        if(!logInSuccess) {
            setLoginFailed(true);
        } 
    }

    return(
        <div>
            <h1>Staff Manager App</h1>
            <p>Please Log In</p>
            <p>
                Username:
                <UsernameInput setUsername={setUsername}/>
            </p>
            <p>
                Password:
                <PasswordInput setPassword={setPassword}/>
            </p>
            <button onClick={handleClick}>Log In</button>
            {loginFailed &&
                <p>Login Failed. Incorrect login details.</p>
            }
        </div>
    )
}

export default LoginScreen;