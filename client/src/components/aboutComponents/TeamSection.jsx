import React, { useEffect } from 'react'
import userImg from "../../assets/images/user.avif"
import DashboardStore from '../../store/DashboardStore'

function TeamSection() {

  const {ReadTeamRequest,TeamList}= DashboardStore();

  useEffect(()=>{
    (async()=>{
        await ReadTeamRequest();
    })()
  },[])


  return (
    <div>
        <div className="container lightColor margin-bottom " style={{marginTop: '10rem'}}>
        <div className="row my-5">
          <div className="col-12">
            <div className="d-flex justify-content-center flex-column h-100">
              <h2 className=" text-center my-2 p-0">Our Team</h2>
              <p className=" mb-3 mt-2 text-center">
              Meet the Passionate Minds Behind Our Success
              </p>
            </div>
          </div>
        </div>
        <div className="row g-5 mb-5 d-flex align-items-center justify-content-center w-100">
        
        {TeamList && TeamList.length>0?(

          TeamList.map((item,index)=>{
            return(
              <div key={index} className="col-md-3">
              <div className="card border-2  themeBorder  text-center py-3 ">
                <img
                  src={userImg}
                  className="card-img-top roundedImage"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                  {item.designation}
                  </p>
                 
                </div>
              </div>
            </div>
            )
          })

        ):(<span></span>)}
        
       
        
       
        
      </div>
      </div>
    </div>
  )
}

export default TeamSection