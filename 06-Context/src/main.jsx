import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalState from './context/index.jsx'


//wrapping Global context inside main context
createRoot(document.getElementById('root')).render(
    <GlobalState>
        {/* //Indicates children inside global context */}
        <App />   
    </GlobalState>
)
