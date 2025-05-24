import React from 'react'
import downArrow from '../assets/downArrow.png'
import locationIcon from '../assets/locationIcon.png'
import MaskPerson from '../assets/MaskPerson.png'
import { useNavigate } from 'react-router-dom'

const FinishRide = (props) => {
  const navigate = useNavigate();
  
  return (
    <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-t-3xl w-full h-[60vh] overflow-hidden animate-slideUp flex flex-col">
        {/* Header */}
        <div className="bg-black text-white p-4">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold">Finish Ride</h2>
          </div>
        </div>
        
        {/* Ride details - scrollable if needed */}
        <div className="p-4 flex-1 overflow-y-auto">
          {/* Destination reached message */}
          <div className="bg-green-100 p-4 rounded-xl mb-4 flex items-center shadow-sm">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-green-800 text-lg">Destination reached</p>
              <p className="text-green-700">You've arrived at the drop-off location</p>
            </div>
          </div>
          
          {/* Ride summary */}
          <div className="bg-gray-50 p-4 rounded-xl mb-4 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2">Ride Summary</h3>
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200">
              <p className="text-gray-700">Distance</p>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                2.5 miles
              </div>
            </div>
            <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200">
              <p className="text-gray-700">Total time</p>
              <p className="font-medium">14 mins</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Fare earned</p>
              <p className="font-bold text-lg">$18.50</p>
            </div>
          </div>
          
          {/* Passenger info */}
          <div className="flex items-center p-4 bg-gray-50 rounded-xl mb-4 shadow-sm border border-gray-100">
            <img className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gray-200" src={MaskPerson} alt="Passenger" />
            <div>
              <p className="font-bold text-lg">John D.</p>
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 ml-1">4.8</span>
              </div>
            </div>
          </div>
          
          {/* Drop-off location */}
          <div className="flex items-start p-4 bg-gray-50 rounded-xl mb-4 shadow-sm border border-gray-100">
            <div className="mt-1 mr-4">
              <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div>
            </div>
            <div>
              <p className="font-bold">Drop-off location</p>
              <p className="text-gray-700">840 E Charleston Rd, Palo Alto</p>
            </div>
          </div>
        </div>
        
        {/* Finish ride button - fixed at bottom */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <button 
            onClick={() => navigate('/captain-home')} 
            className="w-full py-4 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
          >
            Finish this ride
          </button>
        </div>
      </div>
    </div>
  )
}

export default FinishRide
