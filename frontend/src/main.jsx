import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/userDataContext.jsx'
import {CaptainContext} from './context/captainDataContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CaptainContext>
        <DataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DataProvider>
      </CaptainContext>
  </StrictMode>,
)