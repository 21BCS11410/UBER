import React, { useState } from 'react'
import downArrow from '../assets/downArrow.png'
import locationIcon from '../assets/locationIcon.png'
import MaskPerson from '../assets/MaskPerson.png'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-black text-white p-3">
          <div className="flex items-center justify-center">
            <h2 className="text-xl font-bold">Confirm Ride</h2>
            <img 
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(true);
              }} 
              src={downArrow} 
              alt="Down" 
              className="w-5 h-5 filter invert ml-2 cursor-pointer" 
            />
          </div>
        </div>
        
        {/* Ride details */}
        <div className="p-3">
          {/* Map preview placeholder */}
          <div className="bg-gray-200 h-24 rounded-lg mb-3 flex items-center justify-center">
            <p className="text-gray-500">Route Map Preview</p>
          </div>
          
          {/* Ride summary */}
          <div className="bg-gray-50 p-2 rounded-lg mb-3">
            <div className="flex justify-between items-center mb-1">
              <p className="font-medium">Ride Summary</p>
              <div className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                2.5 miles
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Estimated time</p>
              <p className="font-medium">12 mins</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Estimated fare</p>
              <p className="font-medium">$18.50</p>
            </div>
          </div>
          
          {/* Locations */}
          <div className="mb-3">
            <div className="flex items-start mb-2">
              <div className="mt-1 mr-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-0.5 h-8 bg-gray-300 mx-auto my-1"></div>
              </div>
              <div>
                <p className="font-medium">Pickup location</p>
                <p className="text-sm text-gray-500">248 Woodland Ave, Mountain View</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
              </div>
              <div>
                <p className="font-medium">Drop-off location</p>
                <p className="text-sm text-gray-500">840 E Charleston Rd, Palo Alto</p>
              </div>
            </div>
          </div>
          
          {/* OTP input field */}
          <div className="p-2 bg-gray-50 rounded-lg mb-3">
            <label className="block text-gray-700 font-medium mb-1">Enter OTP to verify ride</label>
            <div className="flex gap-2 justify-center">
              <input value={otp} 
              onChange={(e) => setOtp(e.target.value)} 
              type="text" 
              className="w-full h-10 text-center text-xl font-bold border bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
        
        {/* Confirm and Cancel buttons */}
        <div className="p-3 border-t border-gray-200 flex gap-3">
          <button onClick={() => {
            props.setConfirmRidePopUpPanel(false);
            props.setRidePopUpPanel(false);
          }} className="flex-1 py-2.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-colors">
            Cancel
          </button>
          <button onClick={() => navigate('/captain-riding')} className="flex-1 py-2.5 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
            Confirm Ride
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopUp