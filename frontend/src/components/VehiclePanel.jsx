import React from 'react'
import GoCar from '../assets/GoCar.jpg'
import bike from '../assets/bike.jpg'
import Auto from '../assets/Auto.jpg'
import PremierCar from '../assets/PremierCar.jpg'
import user from '../assets/user.png'
import arrowDown from '../assets/downArrow.png'

const VehiclePanel = (props) => {
  return (
    <div className='bg-white border-t border-gray-200 shadow-xl rounded-t-2xl'>
    
                  <h3 className='text-center font-bold text-lg py-2 border-b border-gray-100 flex items-center justify-center'>
                    Choose a vehicle
                    <img onClick={() => {
                      props.setVehiclePanel(false)
                      setPanelOpen(true)
                    }} className="w-5 h-5 ml-1 mt-0.5" src={arrowDown} alt="arrow-down"/>
                  </h3>
    
                  <div onClick={() => {props.setConfirmRidePanel(true);
                        props.setVehiclePanel(false)}
                    } 
                    className='flex items-center justify-between py-2 px-3 border-b border-gray-100 hover:bg-gray-50 hover:border hover:border-blue-300 transition-all cursor-pointer shadow-sm'>
                    <div className='bg-blue-50 rounded-full p-1.5 mr-2'>
                      <img className='w-16 h-16 object-contain' src={GoCar} alt='GoCar'/>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-lg font-bold flex items-center'>UberGo <span className='bg-gray-100 rounded-full px-2 py-0.5 ml-2 text-sm flex items-center'><img className='w-4 h-4 mr-1' src={user} alt='user'/>4</span></h4>
                      <h5 className='text-sm text-gray-600 flex items-center'><span className='w-2 h-2 bg-black rounded-full mr-1.5'></span>2 mins away</h5>
                      <p className='text-xs text-gray-500'>Affordable compact rides</p>
                    </div>
                    <div className='text-xl font-bold'>$5</div>
                  </div>
    

                  <div onClick={() => {props.setConfirmRidePanel(true);
                        props.setVehiclePanel(false)}
                    } 
                    className='flex items-center justify-between py-2 px-3 border-b border-gray-100 hover:bg-gray-50 hover:border hover:border-green-300 transition-all cursor-pointer shadow-sm'>
                    <div className='bg-green-50 rounded-full p-1.5 mr-2'>
                      <img className='w-16 h-16 object-contain' src={bike} alt='Bike'/>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-lg font-bold flex items-center'>Moto <span className='bg-gray-100 rounded-full px-2 py-0.5 ml-2 text-sm flex items-center'><img className='w-4 h-4 mr-1' src={user} alt='user'/>1</span></h4>
                      <h5 className='text-sm text-gray-600 flex items-center'><span className='w-2 h-2 bg-black rounded-full mr-1.5'></span>1 min away</h5>
                      <p className='text-xs text-gray-500'>Fast rides through traffic</p>
                    </div>
                    <div className='text-xl font-bold'>$3</div>
                  </div>
    
                  <div onClick={() => {props.setConfirmRidePanel(true);
                        props.setVehiclePanel(false)}
                    } 
                    className='flex items-center justify-between py-2 px-3 border-b border-gray-100 hover:bg-gray-50 hover:border hover:border-yellow-300 transition-all cursor-pointer shadow-sm'>
                    <div className='bg-yellow-50 rounded-full p-1.5 mr-2'>
                      <img className='w-16 h-16 object-contain' src={Auto} alt='Auto'/>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-lg font-bold flex items-center'>Auto <span className='bg-gray-100 rounded-full px-2 py-0.5 ml-2 text-sm flex items-center'><img className='w-4 h-4 mr-1' src={user} alt='user'/>3</span></h4>
                      <h5 className='text-sm text-gray-600 flex items-center'><span className='w-2 h-2 bg-black rounded-full mr-1.5'></span>5 mins away</h5>
                      <p className='text-xs text-gray-500'>Economical open-air rides</p>
                    </div>
                    <div className='text-xl font-bold'>$4</div>
                  </div>
    
                  <div onClick={() => {props.setConfirmRidePanel(true);
                        props.setVehiclePanel(false)}
                    } 
                    className='flex items-center justify-between py-2 px-3 hover:bg-gray-50 hover:border hover:border-purple-300 transition-all cursor-pointer shadow-sm'>
                    <div className='bg-purple-50 rounded-full p-1.5 mr-2'>
                      <img className='w-18 h-18 object-contain' src={PremierCar} alt='PremierCar'/>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-lg font-bold flex items-center'>Premier <span className='bg-gray-100 rounded-full px-2 py-0.5 ml-2 text-sm flex items-center'><img className='w-4 h-4 mr-1' src={user} alt='user'/>4</span></h4>
                      <h5 className='text-sm text-gray-600 flex items-center'><span className='w-2 h-2 bg-black rounded-full mr-1.5'></span>7 mins away</h5>
                      <p className='text-xs text-gray-500'>Premium rides with top-rated drivers</p>
                    </div>
                    <div className='text-xl font-bold'>$12</div>
                  </div>
    
    </div>
  )
}

export default VehiclePanel