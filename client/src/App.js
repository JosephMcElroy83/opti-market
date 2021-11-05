import React, { useState, useEffect } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Login from './Screens/Login.jsx';
import Register from './Screens/Register.jsx';
import MainContainer from './Containers/MainContainer.jsx';
import Layout from './Layouts/Layout';
import { loginUser, registerUser, verifyUser, removeToken } from './Services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push('/')
  }

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push('/')
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  }


  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
      >
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;