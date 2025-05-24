import React from 'react'
import downArrow from '../assets/downArrow.png'
import locationIcon from '../assets/locationIcon.png'
import MaskPerson from '../assets/MaskPerson.png'

const ConfirmRidePopUp = (props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-black text-white p-4">
          <div onClick={() => {
            props.setConfirmRidePopUpPanel(false);
            props.setRidePopUpPanel(true);
          }} className="flex justify-center mb-2">
            <img src={downArrow} alt="Down" className="w-5 h-5 filter invert" />
          </div>
          <h2 className="text-xl font-bold text-center">Confirm Ride</h2>
        </div>
        
        {/* Ride details */}
        <div className="p-4">
          {/* Map preview placeholder */}
          <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-500">Route Map Preview</p>
          </div>
          
          {/* Ride summary */}
          <div className="bg-gray-50 p-3 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
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
            <img className="w-10 h-10 rounded-full object-cover mr-3" src={MaskPerson} alt="Passenger" />
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
        
        {/* Confirm and Cancel buttons */}
        <div className="p-4 border-t border-gray-200 flex gap-3">
          <button onClick={() => {
            props.setConfirmRidePopUpPanel(false);
            props.setRidePopUpPanel(false);
          }} className="flex-1 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-gray-300 transition-colors">
            Cancel
          </button>
          <button className="flex-1 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
            Confirm Ride
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmRidePopUp