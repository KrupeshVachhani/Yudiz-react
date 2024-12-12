// src/components/Login/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../actions/auth';
import { USERS } from '../../constants';

export const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isAuthenticated } = useSelector(state => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    
    dispatch(login(username));
    
    if (isAuthenticated) {
      navigate('/');
    } else {
      toast.error('You are not authorized. Only admins can access.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* User List in Top Right Corner */}
      <div className="absolute top-4 right-4 bg-white shadow-md rounded-lg p-4 w-64">
        <h3 className="text-xl font-bold mb-3 text-center">Users</h3>
        <div className="space-y-2">
          {Object.entries(USERS).map(([name, role]) => (
            <div 
              key={name} 
              className="flex justify-between items-center border-b pb-2 last:border-b-0"
            >
              <span className="capitalize font-medium">{name}</span>
              <span 
                className={`px-2 py-1 rounded-full text-xs ${
                  role === 'admin' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name" 
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button 
            type="submit" 
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};