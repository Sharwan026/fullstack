import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/index.css"
import 'rsuite/dist/rsuite.min.css';
// import AnimatedLogin from './pages/Login.jsx';
// import CustomNavbar from './components/CustomNavbar.jsx';
// import Login from './pages/Login.jsx';
// import Home from './pages/Home.jsx';
// import CustomSideNav from './components/CustomSideNav.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <AnimatedLogin /> */}
    {/* <CustomNavbar /> */}
    {/* <CustomSideNav /> */}
    {/* <Login /> */}
    {/* <Home/> */}
  </React.StrictMode>,
)
