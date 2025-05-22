import React from 'react'
import locationIcon from '../assets/locationIcon.png'

const LocationSearchPanel = (props) => {



  const locations = [
    "248, Near Kapoor's Cafe, Gaurav Empire",
    "72, Cyber Hub, DLF Cyber City",
    "15, Central Avenue, Business Park",
    "503, Sunset Boulevard, Downtown",
    "42, Galaxy Mall, Sector 18",
    "127, Green Park Market, South Extension",
    "89, Marina Bay, Waterfront Drive",
  ]

  return (
    <div className="rounded-xl shadow-md px-6 pt-6 pb-3 max-w-sm mx-auto mt-3 bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {locations.map((location, index) => (
        <div 
          onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          key={index} 
          className={`flex items-center gap-3 hover:bg-gray-50 hover:border hover:border-blue-300 p-2 rounded-lg cursor-pointer transition-all ${index !== locations.length - 1 ? 'mb-2' : ''}`}
        >
          <img className="w-6 h-6 object-contain" src={locationIcon} alt='location'/>
          <h4 className="m-0 font-medium text-base text-gray-900 truncate">{location}</h4>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPanel;