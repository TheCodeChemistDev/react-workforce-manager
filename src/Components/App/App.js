import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'eact-router-dom';
import LoginScreen from '../LoginScreen/LoginScreen';
import AdminPortal from '../AdminPortal/AdminPortal';
import WorkerPortal from '../WorkerPortal/WorkerPortal';
import Database from '../../Network/UserDatabase';

const App = () => {

  const [database, setDatabase] = useState(new Database());

  const [user, setUser] = useState('');
  const [userType, setUserType] = useState('None');

  const logIn = (username, password) => {
    const userVerified = verifyUser(username, password);
    if (userVerified !== null) {
      setUser(username);
      setUserType(userVerified);
      return true;
    } else {
      return false;
    }
  }

  const logOut = () => {
    setUser('');
    setUserType('None');
  }

  const verifyUser = (username, password) => {
    //TODO: Move this logic to the UserDatabase object
    //Look up username and password against the Database
    for(let i = 0; i < database['database'].length; i++) {
      if(username === database['database'][i]['username']) {
        if(password === database['database'][i]['password']) {
          return database['database'][i]['userType'];
        } else {
          return null;
        }
      }
    }
    return null;

  }

  if(user === '') {
    return (
        <LoginScreen logIn={logIn}/>
    );
  } else {
      if(userType === 'Admin') {
        return (
          <AdminPortal logOut={logOut} database={database}/>
        );
      } else {
        return (
          <WorkerPortal/>
        )
      }
  }
}

export default App;
