import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensures styles are loaded

function TableSkeleton() {
  return (
    <div className="container-fluid px-0"> {/* Ensure full width */}
      <div className="table-responsive w-100"> {/* Allows horizontal scrolling if needed */}
        <table className="table table-hover w-100 my-5">
          <thead className="table-dark w-100">
            <tr>
              <th scope="col" className="w-100"><Skeleton width="100%" height={25} /></th>
              <th scope="col" className="w-100"><Skeleton width="100%" height={25} /></th>
              <th scope="col" className="w-100"><Skeleton width="100%" height={25} /></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 16 }).map((_, index) => (
              <tr key={index}>
                <td className="w-100"><Skeleton width="100%" height={20} /></td>
                <td className="w-100"><Skeleton width="100%" height={20} /></td>
                <td className="w-100">
                  <div className="d-flex justify-content-start gap-2 flex-wrap">
                    <Skeleton width={80} height={30} /> {/* Simulating button */}
                    <Skeleton width={80} height={30} /> {/* Simulating button */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSkeleton;
