import React  from 'react';

const UserList = (props) => {

    const handleClick = (event) => {
        const userId = event.target.value;
        alert(userId);
    }

    return (
        <div>
            <h3>User List</h3>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>User Type</th>
                </tr>
                {props.database.database.map(user => (
                    <tr>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td>{user.userType}</td>
                        <td><button value={user.userId} onClick={handleClick}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default UserList;