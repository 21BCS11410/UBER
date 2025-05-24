import React, {useRef, useState} from 'react'
import map from '../assets/map.jpg'
import logo from '../assets/logo.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const [finishRide, setFinishRide] = useState(false);
    const finishRideRef = useRef(null);

    useGSAP(function() {
        if (finishRide) {
            gsap.to(finishRideRef.current, {
                translateY: '0%',
                duration: 1,
            });
        } else {
            gsap.to(finishRideRef.current, {
                translateY: '100%',
                duration: 1,
            });
        }
    }
    , [finishRide]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Map background */}
      <img src={map} alt="Map" className="w-full h-full object-cover" />
      
      {/* Uber logo */}
      <div className="absolute top-4 left-4">
        <img src={logo} alt="Uber" className="h-12" />
      </div>
      
      {/* Bottom ride info panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl shadow-lg">
        {/* Ride info */}
        <div className="px-4 pt-4 pb-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                1.2 mi
              </div>
              <p className="font-bold">5 mins away</p>
            </div>
            <div className="bg-black text-white text-xs px-2 py-1 rounded">
              Navigate
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="mt-1 mr-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
            <div>
              <p className="font-medium">Drop-off location</p>
              <p className="text-sm text-gray-500">840 E Charleston Rd, Palo Alto</p>
            </div>
          </div>
          
          <button onClick={() => setFinishRide(true)} className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors">
            Complete Ride
          </button>
        </div>
      </div>

      <div ref={finishRideRef} className='fixed z-10 bottom-0 translate-y-full w-full py-0'>
        <FinishRide setFinishRide={setFinishRide}/>
      </div>


    </div>
  )
}

export default CaptainRiding;