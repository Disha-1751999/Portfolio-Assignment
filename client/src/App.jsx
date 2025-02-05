import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blogs' element={<BlogPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/services' element={<ServicePage/>}/>
      <Route path='/contact-us' element={<ContactPage/>}/> 


      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      
    </Routes>
    <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
     
  

  )
}

export default App
