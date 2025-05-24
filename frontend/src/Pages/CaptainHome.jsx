import React, {useRef} from 'react'
import map from '../assets/map.jpg'
import logo from '../assets/logo.png'
import logout from '../assets/logout.png'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const [confirmRidePopUp, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        y: 0,
        duration: 1,
        ease: "power2.out",
        opacity: 1,
      });
    }
    else {
      gsap.to(ridePopUpPanelRef.current, {
        y: "100%",
        duration: 1,
        ease: "power2.out",
        opacity: 0,
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    if (confirmRidePopUp) {
      gsap.to(confirmRidePopUpPanelRef.current, {
        y: 0,
        duration: 1,
        ease: "power2.out",
        opacity: 1,
      });
    }
    else {
      gsap.to(confirmRidePopUpPanelRef.current, {
        y: "100%",
        duration: 1,
        ease: "power2.out",
        opacity: 0,
      });
    }
  }, [confirmRidePopUp]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Map section - top half with overlaid header */}
      <div className="h-[calc(50%)] relative">
        <img src={map} alt="map" className="w-full h-full object-cover" />
        
        {/* Header with logo and logout - positioned absolutely over map */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
          <img src={logo} alt="Uber" className="h-12" />
          <a href="#" className="p-2">
            <img src={logout} alt="Logout" className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Captain information - bottom half */}
      <div className="h-1/2 bg-white p-4 rounded-t-3xl -mt-4 shadow-lg border-t-2">
        <CaptainDetails/>
      </div>

      <div 
        ref={ridePopUpPanelRef} 
        className='fixed inset-0 z-50 flex items-center justify-center'
        style={{ transform: 'translateY(100%)', opacity: 0 }}>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>

      <div 
        ref={confirmRidePopUpPanelRef} 
        className='fixed inset-0 z-50 flex items-center justify-center'
        style={{ transform: 'translateY(100%)', opacity: 0 }}>
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
      


    </div>
  )
}

export default CaptainHome