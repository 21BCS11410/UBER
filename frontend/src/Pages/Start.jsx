import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>

        <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 w-full justify-between flex-col bg-red-400 flex'>

            <img className='w-16 ml-8' src='null' alt=''/>

            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-2xl font-bold'>Get started with Uber</h2>
                <Link to='/signup' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>

    </div>
  )
}

export default Start