import React from 'react';

const AdminPortalNavBar = (props) => {

    const handleClick = ({target}) => {
        const navDestination = target.value;
        switch(navDestination) {
            case 'Log Out':
                props.logOut();
                break;
            default:
                props.navigate(navDestination);
                break;
        }

    }

    return (
        <header>
            <h1>Staff Management App</h1>
            <button onClick={handleClick} value='Home'>Home</button>
            <button onClick={handleClick} value='Staff Management'>Staff Management</button>
            <button onClick={handleClick} value='Manage Work'>Manage Work</button>
            <button onClick={handleClick} value='Log Out'>Log Out</button>
        </header>
    )
}

export default AdminPortalNavBar;