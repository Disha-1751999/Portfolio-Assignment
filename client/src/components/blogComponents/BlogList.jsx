import React, { useEffect } from "react";
import DashboardStore from "../../store/DashboardStore";

function BlogList() {
  const {ReadBlogRequest,BlogList}= DashboardStore();

  useEffect(()=>{
    (async()=>{
        await ReadBlogRequest();
    })()
  },[])
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3  row-cols-lg-4  g-4 mb-5">

        {BlogList && BlogList.length>0?(
        
        BlogList.map((item,index)=>{
                    return(
                      <div key={index} className="col">
          <div className="card border-2 themeBorder">
            <img
              src={item.img}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
              {item.description}
              </p>
              <button className="btn themeBorder themeColor px-3 mt-3 smaller-font secondary-btn">
                View Details
              </button>
            </div>
          </div>
        </div>
                    )
                  })
        
                ):(<span></span>)}
        
       
      </div>
    </>
  );
}

export default BlogList;
