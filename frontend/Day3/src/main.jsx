import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
// import { Login } from './pages/auth/Login.jsx'
// import Navbar from './components/ui/user/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Login/> */}
    {/* <Navbar/> */}
    <App/>
  </React.StrictMode>,
)
