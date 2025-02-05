import React, { useEffect } from 'react'
import DashboardStore from '../../store/DashboardStore'

function Services() {

  const {ReadServiceRequest,ServiceList}= DashboardStore();

  useEffect(()=>{
    (async()=>{
        await ReadServiceRequest();
    })()
  },[])


  return (
    <>
    <div className="container lightColor margin-bottom " style={{marginTop: '5rem'}}>
            <div className="row my-5">
              <div className="col-12">
                <div className="d-flex justify-content-center flex-column h-100">
                  <h2 className=" text-center my-2 p-0">Services We Provide</h2>
                  <p className=" mb-3 mt-2 text-center">
                  Transforming Ideas into Reality!
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-5 mb-5 d-flex align-items-center justify-content-center w-100">




              {ServiceList && ServiceList.length>0?(
              
              ServiceList.map((item,index)=>{
                          return(
                            <div key={index} className="col-md-4">
              <div className="card border-2  themeBorder  text-center py-3 ">
               
                <div className="card-body d-flex flex-column gap-1">
                <div>
                <i className="bi bi-browser-edge fs-1 themeColor mb-4"></i>
                </div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                  {item.description}
                  </p>
                 
                </div>
              </div>
            </div>
                          )
                        })
              
                      ):(<span></span>)}

           
            
           
            
          </div>
          </div>
    </>
  )
}

export default Services