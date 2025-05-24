import React from 'react'
import locationIcon from '../assets/locationIcon.png'
import downArrow from '../assets/downArrow.png'
import { Link } from 'react-router-dom'

const RidePopUp = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-black text-white p-4">
          <div className="flex justify-center mb-2">
            <h5 onClick={() => props.setRidePopUpPanel(false)}>
              <img src={downArrow} alt="Down" className="w-5 h-5 filter invert" />
            </h5>
          </div>
          <h2 className="text-xl font-bold">New Ride Request</h2>
          <div className="flex items-center mt-1">
            <div className="h-1.5 w-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <p className="text-sm">Expires in 15 seconds</p>
          </div>
        </div>
        
        {/* Ride details */}
        <div className="p-4">
          {/* Fare */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">Estimated fare</p>
              <p className="text-2xl font-bold">$18.50</p>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              2.5 miles
            </div>
          </div>
          
          {/* Locations */}
          <div className="mb-4">
            <div className="flex items-start mb-3">
              <div className="mt-1 mr-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-0.5 h-10 bg-gray-300 mx-auto my-1"></div>
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
          
          {/* Passenger info */}
          <div className="flex items-center p-3 bg-gray-50 rounded-lg mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <span className="text-lg font-bold">J</span>
            </div>
            <div>
              <p className="font-medium">John D.</p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-1">4.8</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex border-t border-gray-200">
          <button onClick={() => props.setRidePopUpPanel(false)} className="flex-1 py-4 text-red-600 font-bold hover:bg-red-50 transition-colors">
            Decline
          </button>
          <div className="w-px bg-gray-200"></div>
          <button onClick={() => {
            props.setRidePopUpPanel(false)
            props.setConfirmRidePopUpPanel(true)
          }} className="flex-1 py-4 text-green-600 font-bold hover:bg-green-50 transition-colors">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default RidePopUp

// Add this to your CSS or tailwind.config.js
// @keyframes slideUp {
//   from { transform: translateY(100%); opacity: 0; }
//   to { transform: translateY(0); opacity: 1; }
// }
// .animate-slideUp {
//   animation: slideUp 0.3s ease-out forwards;
// }