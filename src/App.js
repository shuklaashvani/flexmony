import logo from './logo.svg';
import './App.css';
import {Routes, Route } from "react-router-dom";
import Login from './component/Login'
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Notfound from './component/Notfound';
import { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie'
import Protected from './component/Protected';

function App() {
  const token = Cookies.get('token')

  return (
    <div className="App">
      <div>
        <Toaster 
          position='top-right'
          reverseOrder={false}
        />
      </div>
      <Routes>
        <Route index path="/Login" element={
          <Protected isLoggedIn={token?false:true} replace="">
                  <Login />
          </Protected>
              }
                />
        <Route path="/register" element={
            <Protected isLoggedIn={token?false:true} replace="">
                  <Register />
            </Protected>
              }
                />
        <Route path="/" element={
          <Protected isLoggedIn={token?true:false} replace="Login">
                  <Dashboard />
          </Protected>
              }
                />
        <Route path="*" element={
                  <Notfound />
              }
                />
      </Routes>
    </div>
  );
}

export default App;
