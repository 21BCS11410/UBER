import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password
    });
    console.log(captainData);
    setPassword('');
    setEmail('');
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-24">
      <div className="max-w-md mx-auto p-6 rounded-xl shadow-xl bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500"></div>
        
        <div>
          <div className="flex justify-between items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" 
              alt="Uber Logo" 
              className="h-8 mb-4 mt-2"
            />
            <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Captain</div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome Back</h2>
        
          <form onSubmit={(e) => {
            submitHandler(e);
          }} className="flex flex-col">
            <h3 className="text-lg font-bold mb-1">What's your email</h3>
            
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
            />
            
            <h3 className="text-lg font-bold mb-1">Password</h3>
            
            <input 
              type="password"
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
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
          <Link to="/captain-signup" className="text-green-600 font-medium hover:underline">Create new account</Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <Link to="/login">
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-base font-medium hover:bg-green-700 border-0 transition-all duration-200 shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Sign in as User
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default CaptainLogin