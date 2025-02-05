import React from 'react'
import heroImage from '../../assets/images/hero-image.png'
import { Link } from 'react-router-dom'

function HeroComponent() {
  return (
    <>
    <div className="container mb-5">
        <div className="row">
            <div className="col-12">
            <div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
>
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container">
           <div className="row ">
            <div className=" col-md-6 lightColor upperCase ">
                <div className='d-flex justify-content-center flex-column h-100 lh-lg letter-spacing word-spacing gap-1'>
                <h1 className=' bolderFont'>Welcome to </h1>
                <h1 className=' bolderFont'>My <span className='themeColor '>Portfolio</span></h1>
                <div>
                <Link to='/contact-us' className='ls-0 main-btn btn themeColorBg lightColor px-3 mt-3 text-capitalize'>Hire me</Link>
                </div>
                </div>
                
            </div>
            <div className="col-md-6">
                <img src={heroImage} alt="" className='w-75 h-auto mx-auto d-block '/>
            </div>
           </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="container">
           <div className="row ">
            <div className=" col-md-6 lightColor upperCase ">
                <div className='d-flex justify-content-center flex-column h-100 lh-lg letter-spacing word-spacing gap-1'>
                <h1 className=' bolderFont'>Hello, </h1>
                <h1 className=' bolderFont'>I'm a  <span className='themeColor '>web developer</span></h1>
                <div>
                <Link to='/contact-us' className='ls-0 main-btn btn themeColorBg lightColor px-3 mt-3 text-capitalize'>Hire me</Link>
                </div>
                </div>
                
            </div>
            <div className="col-md-6">
                <img src={heroImage} alt="" className='w-75 h-auto mx-auto d-block '/>
            </div>
           </div>
      </div>
    </div>
    
  </div>

 

</div>

            </div>
        </div>
    </div>

    </>
  )
}

export default HeroComponent