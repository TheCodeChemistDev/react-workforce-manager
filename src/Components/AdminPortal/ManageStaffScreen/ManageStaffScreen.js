import React, {useState} from 'react';
import UserList from './UserList/UserList';
import AddUserForm from './AddUserForm/AddUserForm';

const ManageStaffScreen = (props) => {

    const [update, setUpdate] = useState(false);
    const [display, setDisplay] = useState('userList');

    const goToAddUser = () => {
        setDisplay('addUser');
    }

    const goToUserList = () => {
        setDisplay('userList');
    }

    const handleClick = () => {
        //TODO: Update code to take passed username and password
        props.database.addUser('ryan', '1234');

        //Temporary code to force page re-render
        setUpdate(!update);
    }

    return (
        <div>
            <h2>Staff Management Screen</h2>
            {display === 'userList' ? 
                <div>
                    <UserList database={props.database}/>
                    <button onClick={goToAddUser}>Add User</button>
                </div> : <AddUserForm database={props.database} goBack={goToUserList}/>}

            
        </div>
        
    )
}

export default ManageStaffScreen;