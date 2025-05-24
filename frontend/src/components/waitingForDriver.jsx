import React from 'react'
import MaskPerson from '../assets/MaskPerson.png'
import Callicon from '../assets/Callicon.png'
import locationIcon from '../assets/locationIcon.png'
import arrowDown from '../assets/downArrow.png'

const WaitingForDriver = (props) => {
  return (
    <div className="bg-white rounded-t-2xl shadow-lg p-4 border border-gray-100">
      <div onClick={() => {
        props.setWaitingForDriver(false)
      }} className="flex justify-center mb-2">
        <img className="w-6 h-6" src={arrowDown} alt="arrow-down"/>
      </div>
      {/* Driver info section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="relative">
            <img className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" src={MaskPerson} alt="Driver" />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-3">
            <h3 className="font-bold text-lg">Rahul K.</h3>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">4.9</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-full p-3">
          <img className="w-6 h-6" src={Callicon} alt="Call" />
        </div>
      </div>

      {/* Car info section */}
      <div className="bg-gray-50 p-3 rounded-xl mb-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Toyota Corolla</p>
            <p className="font-bold">DL 01 AB 1234</p>
          </div>
          <div className="bg-white px-3 py-1 rounded-lg shadow-sm">
            <p className="font-bold">2 min away</p>
          </div>
        </div>
      </div>

      {/* Location section */}
      <div className="border-t border-gray-200 pt-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-50 p-1 rounded-full">
            <img className="w-5 h-5 object-contain" src={locationIcon} alt="location" />
          </div>
          <div>
            <p className="text-black font-medium">248/11-A</p>
            <p className="text-xs text-gray-500">Near Kapoor's Cafe, Gaurav Empire</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-green-50 p-1 rounded-full">
            <img className="w-5 h-5 object-contain" src={locationIcon} alt="location" />
          </div>
          <div>
            <p className="text-black font-medium">72, Sector-B</p>
            <p className="text-xs text-gray-500">Cyber Hub, DLF Cyber City</p>
          </div>
        </div>
      </div>

      {/* Message driver button */}
      <div className="mt-4">
        <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Message Driver
        </button>
      </div>
    </div>
  )
}

export default WaitingForDriver