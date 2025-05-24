import React from 'react'
import MaskPerson from '../assets/MaskPerson.png'
import timeWatch from '../assets/TimeWatch.png'
import Distance from '../assets/locationIcon.png'
import Notes from '../assets/downArrow.png'



const CaptainDetails = () => {
  return (
    <div>

        <div className="flex items-center mb-4">
                  <img src={MaskPerson} alt="Captain" className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h2 className="text-2xl font-bold">Gaurav Soni</h2>
                    <p className="text-gray-500">Captain</p>
                  </div>
        </div>
        
        {/* Today's earnings */}
        <div className="bg-black text-white rounded-xl p-4 mb-4">
                  <p className="text-sm">Today's earnings</p>
                  <h3 className="text-3xl font-bold">$124.50</h3>
                  <p className="text-sm text-gray-300">8 trips completed</p>
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center">
                    <img src={timeWatch} alt="Hours" className="w-8 h-8 mb-2" />
                    <p className="text-xs text-gray-500">Hours online</p>
                    <p className="font-bold">6.5 hrs</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center">
                    <img src={Distance} alt="Distance" className="w-8 h-8 mb-2" />
                    <p className="text-xs text-gray-500">Distance</p>
                    <p className="font-bold">42 miles</p>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-xl flex flex-col items-center">
                    <img src={Notes} alt="Notes" className="w-8 h-8 mb-2" />
                    <p className="text-xs text-gray-500">Notes</p>
                    <p className="font-bold">2 new</p>
                  </div>
        </div>

    </div>
  )
}

export default CaptainDetails