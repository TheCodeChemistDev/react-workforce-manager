import React, { useState } from 'react';
import AdminPortalNavBar from './AdminPortalNavBar/AdminPortalNavBar';
import AdminHomeScreen from './AdminHomeScreen/AdminHomeScreen';
import ManageStaffScreen from './ManageStaffScreen/ManageStaffScreen';
import ManageWorkScreen from './ManageWorkScreen/ManageWorkScreen';

const AdminPortal = (props) => {
    
    const [currentPage, setCurrentPage] = useState('Home');

    const navigate = (targetLocation) => {
        setCurrentPage(targetLocation);
    }

    return (
        <div>
            <AdminPortalNavBar navigate={navigate} logOut={props.logOut}/>
            {currentPage === 'Home' ? <AdminHomeScreen/> : null}
            {currentPage === 'Staff Management' ? <ManageStaffScreen database={props.database}/> : null}
            {currentPage === 'Manage Work' ? <ManageWorkScreen/> : null}
        </div>
    )
}

export default AdminPortal;