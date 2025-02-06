import React from 'react'
import Skeleton from "react-loading-skeleton";

function TableSkeleton() {
  return (
    
    <table className="table table-hover mb-5 w-100 my-5">
      <thead className="table-dark"> 
        <tr>
          <th scope="col"><Skeleton count={1} /></th>
          <th scope="col"><Skeleton count={1} /></th>
          <th scope="col"><Skeleton count={1} /></th>
        </tr>
      </thead>
      <tbody>

      {
                                   Array.from({length:16}).map((item,index)=>{
                                       return(

                                        <tr key={index}>
              <td>  <Skeleton count={1} /></td>
              <td>  <Skeleton count={1} /></td>
              <td>
                <div className="d-flex justify-content-start gap-2 flex-wrap">
                  <button
                  >
                      <Skeleton count={1} />
                  </button>
                  <button
                    
                  >
                      <Skeleton count={1} />
                  </button>
                </div>
              </td>
            </tr>
                                         
                                       )
                                   })
                               }
            
        
      </tbody>
    </table>
  
  )
}

export default TableSkeleton