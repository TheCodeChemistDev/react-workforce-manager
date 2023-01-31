import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Currently working as intended

const PasswordInput = (props) => {

    const handleChange = ({target}) => props.setPassword(target.value);

    return(
        <input type='password' id='passwordInput' onChange={handleChange}></input>
    )
}

export default PasswordInput;