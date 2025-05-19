import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  const [vehicleColor, setVehicleColor] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [capacity, setCapacity] = useState(4);
  const [captainData, setCaptainData] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      vehicleType: vehicleType,
      vehicleColor: vehicleColor,
      numberPlate: numberPlate,
      capacity: capacity
    });
    console.log(captainData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setVehicleColor('');
    setNumberPlate('');
    setCapacity(4);
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
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Create Captain Account</h2>
        
          <form onSubmit={submitHandler} className="flex flex-col">
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label htmlFor="firstName" className="text-lg font-bold mb-1">First Name</label>
                <input 
                  id="firstName"
                  name="firstName"
                  type="text" 
                  required 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="text-lg font-bold mb-1">Last Name</label>
                <input 
                  id="lastName"
                  name="lastName"
                  type="text" 
                  required 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="w-full px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
                />
              </div>
            </div>
            
            <label htmlFor="email" className="text-lg font-bold mb-1">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
            />
            
            <label htmlFor="password" className="text-lg font-bold mb-1">Password</label>
            <input 
              id="password"
              name="password"
              type="password"
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create password"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
            />
            
            <label htmlFor="confirmPassword" className="text-lg font-bold mb-1">Confirm Password</label>
            <input 
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="px-4 py-2 rounded-lg mb-3 text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
            />
            
            <h3 className="text-lg font-bold mb-1 mt-2">Vehicle Information</h3>
            
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label htmlFor="vehicleType" className="text-sm font-bold mb-1">Vehicle Type</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  required
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
                >
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="bike">Bike</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="vehicleColor" className="text-sm font-bold mb-1">Vehicle Color</label>
                <input 
                  id="vehicleColor"
                  name="vehicleColor"
                  type="text" 
                  required 
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  placeholder="Color"
                  className="w-full px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mb-3">
              <div className="flex-1">
                <label htmlFor="numberPlate" className="text-sm font-bold mb-1">Number Plate</label>
                <input 
                  id="numberPlate"
                  name="numberPlate"
                  type="text" 
                  required 
                  value={numberPlate}
                  onChange={(e) => setNumberPlate(e.target.value)}
                  placeholder="Number plate"
                  className="w-full px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="capacity" className="text-sm font-bold mb-1">Capacity</label>
                <input 
                  id="capacity"
                  name="capacity"
                  type="number" 
                  required 
                  min="1"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-green-500 bg-[#f5f5f5] transition-all duration-200 border border-gray-200"
                />
              </div>
            </div>
            
            <button 
              type="submit"
              className="bg-black text-white py-2 px-4 rounded-lg text-base font-medium cursor-pointer hover:bg-gray-800 transition-all duration-200 shadow-md mt-4"
            >
              Sign Up
            </button>
          </form>
          
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="mx-3 text-sm text-gray-500">or</div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        <div className="text-center mt-3">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/captain-login" className="text-green-600 font-medium hover:underline">Login</Link>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
        <div className="max-w-md mx-auto">
          <Link to="/signup">
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg text-base font-medium hover:bg-green-700 border-0 transition-all duration-200 shadow-md flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Sign up as User
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaptainSignup