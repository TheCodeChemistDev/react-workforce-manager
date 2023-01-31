import React from 'react';
import ReactDOM from 'react-dom';

// Currently working as intended

const UsernameInput = (props) => {

    const handleChange = ({target}) => props.setUsername(target.value);

    return (
            <input type='text' id='usernameInput' onChange={handleChange}></input>
    );
}

export default UsernameInput;