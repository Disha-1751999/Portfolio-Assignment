import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import DashboardService from './DashboardService';
 import DashboardBlog from './DashboardBlog';
import DashboardTeam from './DashboardTeam';
import DashboardStore from '../../store/DashboardStore';

function DashboardComponent() {

  const {UserLogoutRequest}= DashboardStore()
  const navigate= useNavigate()

  const handleLogout=async()=>{
     let res= await UserLogoutRequest();
     if(res){
      localStorage.clear();
      sessionStorage.clear();
      navigate('/login')
     }
  }
  return (
    <>
    <div className="container lightColor">
        <div className="row">
          <h2 className="lightColor text-center my-5">Dashboard</h2>
        </div>
        <div className="row">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active lightColor"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Services
              </button>
              <button
                className="nav-link lightColor"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Blogs
              </button>
              <button
                className="nav-link lightColor"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Team Members
              </button>
              <button
                className="nav-link lightColor"
                id="nav-disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-disabled"
                type="button"
                role="tab"
                aria-controls="nav-disabled"
                aria-selected="false"
                
              >
                Logout
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <DashboardService/>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              <DashboardBlog/>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex="0"
            >
             <DashboardTeam/>
            </div>
            <div
              className="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
             <div className="container">
             <div className="row mt-3">
            <div className="col-12">
            <button className='btn themeColorBg lightColor px-3 mt-3 main-btn' onClick={handleLogout}>Logout</button>
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

export default DashboardComponent