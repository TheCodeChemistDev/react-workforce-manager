import React, {useState} from 'react';

const AddUserForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        if(event.target.id === 'userInput') {
            setUsername(event.target.value);
        } else if(event.target.id === 'passwordInput') {
            setPassword(event.target.value);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.database.addUser(username, password);
        props.goBack();
    }


    return (
        <div>
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type='text' id='userInput' value={username} onChange={handleChange}></input>
                </label>
                <label>
                    Password:
                    <input type='password' id='passwordInput' value={password} onChange={handleChange}></input>
                </label>
                <input type='submit' value='Add User'/>
            </form>
            <button onClick={props.goBack}>Go Back</button>
        </div>
    )
}

export default AddUserForm;