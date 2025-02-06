import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensure Skeleton styles are included

function TableSkeleton() {
  return (
    <table className="table table-hover mb-5 w-100 my-5">
      <thead className="table-dark">
        <tr>
          <th scope="col"><Skeleton width="100%" height={25} /></th>
          <th scope="col"><Skeleton width="100%" height={25} /></th>
          <th scope="col"><Skeleton width="100%" height={25} /></th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 16 }).map((_, index) => (
          <tr key={index}>
            <td><Skeleton width="100%" height={20} /></td>
            <td><Skeleton width="100%" height={20} /></td>
            <td>
              <div className="d-flex justify-content-start gap-2 flex-wrap">
                <Skeleton width={80} height={30} /> {/* Simulating button */}
                <Skeleton width={80} height={30} /> {/* Simulating button */}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableSkeleton;
