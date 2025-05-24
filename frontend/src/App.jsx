import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import CaptainLogin from './Pages/CaptainLogin'
import CaptainSignup from './Pages/CaptainSignup'
import Home from './Pages/Home'
import UserProtectedWrapper from './Pages/UserProtectedWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectedWrapper from './Pages/CaptainProtectedWrapper'
import CaptainLogout from './Pages/CaptainLogout'
import Riding from './Pages/Riding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/login' element={<UserLogin/>} />
        <Route path='/riding' element={<Riding/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/captain-login' element={<CaptainLogin/>} />
        <Route path='/captain-signup' element={<CaptainSignup/>} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home/>
          </UserProtectedWrapper>
        }></Route>
        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
        }></Route>
        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
        }></Route>
        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogout/>
          </CaptainProtectedWrapper>
        }></Route>
      </Routes>
    </div>
  )
}

export default App