import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userDataContext';
import axios from 'axios';


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [userData, setUserData] = useState('');

  const navigate = useNavigate();
  const {user, setUser} = useContext(UserDataContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    try{
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

      if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch(err){
      console.error("Login error:", err);
    }



    // setUserData({
    //   email: email, 
    //   password: password
    // });
    // console.log(userData);
    setPassword('');
    setEmail('');
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-24">
      <div className="max-w-md mx-auto p-6 rounded-xl shadow-xl bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div>
          <div className="flex justify-between items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" 
              alt="Uber Logo" 
              className="h-8 mb-4 mt-2"
            />
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">User</div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome Back</h2>
        
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email" className="text-lg font-bold mb-1">What's your email</label>
            
            <input 
              id="email"
              name="email"
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
            />
            
            <label htmlFor="password" className="text-lg font-bold mb-1">Password</label>
            
            <input 
              id="password"
              name="password"
              type="password"
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
            />
            
            <button 
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg text-base font-medium cursor-pointer hover:bg-gray-800 transition-all duration-200 shadow-md mt-2"
            >
              Login
            </button>
          </form>
          
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="mx-3 text-sm text-gray-500">or</div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="text-center mt-3">
          <span className="text-gray-600">New here? </span>
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">Create new account</Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <Link to="/captain-login">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg text-base font-medium hover:bg-green-700 cursor-pointer border-0 transition-all duration-200 shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2v5a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-4a1 1 0 00-.293-.707l-3-3A1 1 0 0016 6h-1v3a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011 1v3h3.586l2.707-2.707A1 1 0 0118 4v-.586a1 1 0 00-1.707-.707l-2 2A1 1 0 0114 5H8a1 1 0 00-1 1v4a1 1 0 01-1 1H3a1 1 0 110-2h2V5a1 1 0 00-1-1H3z" />
              </svg>
              Sign in as Captain
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin