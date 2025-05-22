import React from 'react'
import arrowDown from '../assets/downArrow.png'
import PremierCar from '../assets/PremierCar.jpg'
import locationIcon from '../assets/locationIcon.png'

const ConfirmedRide = (props) => {

  return (

    <div className="bg-white rounded-t-2xl shadow-lg p-4 border border-gray-100">

      <div className="flex flex-col items-center">

        <div className="flex items-center justify-center">
          <h3 className="text-xl font-bold">Confirm your ride</h3>
          <img onClick={() => {
                props.setConfirmRidePanel(false)
                props.setVehiclePanel(true)
            }} className="w-5 h-5 ml-1 mt-1" src={arrowDown} alt="arrow-down"/>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl w-full flex justify-center mb-1">
          <img className="w-28 h-28 object-contain" src={PremierCar} alt="Premier Car"/>
        </div>

      </div>

      <div className="border-t border-gray-200 pt-1 shadow-sm">

        <div className="flex items-center gap-3 mb-3 p-2 hover:bg-gray-50 rounded-lg transition-all">
          <div className="bg-blue-50 p-1 rounded-full">
            <img className="w-5 h-5 object-contain" src={locationIcon} alt="location"/>
          </div>
          <div>
            <p className="text-black font-medium">248/11-A</p>
            <p className="text-xs text-gray-500">Near Kapoor's Cafe, Gaurav Empire</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all">
          <div className="bg-green-50 p-1 rounded-full">
            <img className="w-5 h-5 object-contain" src={locationIcon} alt="location"/>
          </div>
          <div>
            <p className="text-black font-medium">72, Sector-B</p>
            <p className="text-xs text-gray-500">Cyber Hub, DLF Cyber City</p>
          </div>
        </div>
        
      </div>

      <div className="border-t border-gray-200 mt-3 pt-4 flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-500">Total Fare</p>
          <p className="text-xl font-bold">$12.00</p>
        </div>

        <button className="bg-green-700 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Confirm Ride
        </button>

      </div>

    </div>

  )
}

export default ConfirmedRide