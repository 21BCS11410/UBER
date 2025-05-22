import React, { useRef } from 'react'
import logo from '../assets/logo.png'
import map from '../assets/map.jpg'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import arrowDown from '../assets/downArrow.png'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('clicked')
  }

  useGSAP(function(){
    if(panelOpen){
        gsap.to(panelRef.current, {
        height: '70%',
        duration: 1,
      })
    }
    else{
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 1,
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
        gsap.to(vehiclePanelRef.current, {
        translateY: '0%',
        duration: 1,
      })
    }
    else{
      gsap.to(vehiclePanelRef.current, {
        translateY: '100%',
        duration: 1,
      })
    }
  }, [vehiclePanel])


  useGSAP(function(){
    if(confirmRidePanel){
        gsap.to(confirmRidePanelRef.current, {
        translateY: '0%',
        duration: 1,
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current, {
        translateY: '100%',
        duration: 1,
      })
    }
  }, [confirmRidePanel])




  return (


    <div className='relative h-screen overflow-hidden'>

      <img className='w-22 absolute right-3 top-2' src={logo} alt="logo" />

      <div className='h-screen w-screen'>
        {/* image for temprory use */}
        <img className='h-full w-full' src={map} alt='' />
      </div>

      <div className='h-screen absolute w-full top-0 shadow-lg flex flex-col justify-end'>

        <div className='h-[30%] px-6 py-4 bg-white relative'>

              <h4 className='text-2xl font-bold mb-3'>Find a trip</h4>
              
              {panelOpen && (
                <div 
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={() => setPanelOpen(false)}
                >
                  <img className="w-6 h-6" src={arrowDown} alt="Close-panel"/>
                </div>
              )}

            <form onSubmit={(e) => {
              submitHandler(e)
            }} className='flex flex-col mt-4 relative'>
              <div className="absolute left-5 top-5 h-[calc(100%-37px)] flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-0.5 flex-grow bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
              </div>
              
              <input 
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                type="text" 
                placeholder='Add a pickup location' 
                className='px-4 py-3 pl-12 border border-gray-300 bg-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4'
              />
              <input 
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                type="text" 
                placeholder='Enter your destination' 
                className='px-4 py-3 pl-12 border border-gray-300 rounded-lg bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </form>

        </div>


        <div ref={panelRef} className='bg-white h-0'>
            {<LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>}
        </div>

      </div>

      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full py-0'>
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full py-0'>
            <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>

      <div className='fixed z-10 bottom-0 translate-y-full w-full py-0'>
            
      </div>

    </div>

    

  )
}

export default Home