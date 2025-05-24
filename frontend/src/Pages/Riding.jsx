import React from 'react'
import MaskPerson from '../assets/MaskPerson.png'
import Home from '../assets/Home.png'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen bg-white p-4 overflow-hidden flex flex-col'>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Link to='/home' className="mr-2">
            <img src={Home} alt="Home" className="w-5 h-5" />
          </Link>
          <h2 className="text-xl font-bold">Payment</h2>
        </div>
        <button className="text-blue-600 font-medium text-sm">Cancel</button>
      </div>

      {/* Ride summary */}
      <div className="mb-3">
        <h3 className="font-bold text-base mb-2">Ride summary</h3>
        <div className="flex items-center bg-gray-50 p-2 rounded-xl">
          <img className="w-10 h-10 rounded-full object-cover mr-2" src={MaskPerson} alt="Driver" />
          <div>
            <p className="font-medium text-sm">Rahul K.</p>
            <span className="text-xs text-gray-500">Toyota Corolla • 4.9 ★</span>
          </div>
        </div>
      </div>

      {/* Trip details */}
      <div className="mb-3 flex justify-between text-sm">
        <div>
          <div className="mb-1">
            <span className="text-gray-600">Trip distance</span>
            <span className="ml-2">3.2 miles</span>
          </div>
          <div>
            <span className="text-gray-600">Trip time</span>
            <span className="ml-2">18 min</span>
          </div>
        </div>
      </div>

      {/* Payment details */}
      <div className="border-t border-gray-200 pt-2 mb-3 flex-shrink-0">
        <h3 className="font-bold text-base mb-2">Payment details</h3>
        
        <div className="grid grid-cols-2 gap-1 text-sm">
          <span className="text-gray-600">Base fare</span>
          <span className="text-right">$8.50</span>
          
          <span className="text-gray-600">Distance fee</span>
          <span className="text-right">$2.00</span>
          
          <span className="text-gray-600">Taxes</span>
          <span className="text-right">$0.95</span>
          
          <span className="text-gray-600">Service fee</span>
          <span className="text-right">$1.00</span>
        </div>
      </div>

      {/* Tip section */}
      <div className="mb-3">
        <h3 className="font-bold text-base mb-2">Add a tip</h3>
        <div className="flex gap-2">
          <button className="flex-1 border border-gray-300 py-1.5 rounded-lg text-sm hover:bg-gray-50">$1</button>
          <button className="flex-1 border border-gray-300 py-1.5 rounded-lg text-sm hover:bg-gray-50">$2</button>
          <button className="flex-1 border border-gray-300 py-1.5 rounded-lg text-sm hover:bg-gray-50">$5</button>
          <button className="flex-1 border border-gray-300 py-1.5 rounded-lg text-sm hover:bg-gray-50">Custom</button>
        </div>
      </div>

      {/* Payment method */}
      <div className="flex items-center justify-between bg-gray-50 p-2 rounded-xl mb-3">
        <div className="flex items-center">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-sm">Visa •••• 4242</p>
            <p className="text-xs text-gray-500">Expires 12/24</p>
          </div>
        </div>
        <span className="text-blue-600 text-sm font-medium">Change</span>
      </div>

      {/* Total and pay button - push to bottom */}
      <div className="mt-auto border-t border-gray-200 pt-3">
        <div className="flex justify-between font-bold text-base mb-3">
          <span>Total</span>
          <span>$12.45</span>
        </div>
        
        <button className="w-full bg-black text-white py-2.5 rounded-lg font-medium">
          Pay now
        </button>
      </div>
    </div>
  )
}

export default Riding