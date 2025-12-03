import React,{useState}from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
const App = () => {

  const [showLogin,setshowLogin]=useState(false);

  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
        <Navbar  setshowLogin={setshowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes><b></b>
      </div>
      <Footer/>
    </>

  )
}

export default App