
import React, { useEffect, useState } from "react";
import DashboardStore from "../../store/DashboardStore";
import { toast } from "react-hot-toast";

function DashboardService() {
  const { SaveServiceRequest, ReadServiceRequest, ServiceList, RemoveServiceRequest } = DashboardStore();

  // State to store selected service for editing
  const [selectedService, setSelectedService] = useState({
    title: "",
    description: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setSelectedService({
      ...selectedService,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (Add/Edit Service)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      // If it exists, it's an update; otherwise, it's new
      title: selectedService.title,
      description: selectedService.description,
    };

    let response = await SaveServiceRequest(reqBody);

    if (response) {
      toast.success(selectedService.id ? "Updated Successfully" : "Saved Successfully");
      setSelectedService({ 
        
        title: "", description: "" }); // Reset state
      document.getElementById("closeModal").click(); // Close the modal
      await ReadServiceRequest(); // Refresh the service list
    } else {
      toast.error("Error");
    }
  };

  // Load services on component mount
  useEffect(() => {
    (async () => {
      await ReadServiceRequest();
    })();
  }, []);


  const remove=async(id)=>{
    let response=await RemoveServiceRequest(id)
    if(response){
      toast.success('Removed')
      await ReadServiceRequest();
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12">
            <button
              className="btn themeColorBg lightColor px-3 mt-3 main-btn"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#serviceModal"
              onClick={() => setSelectedService({ id: null, title: "", description: "" })}
            >
              Add New Service
            </button>

            {/* Add/Edit Service Modal */}
            <div className="modal fade text-dark" id="serviceModal" tabIndex="-1" aria-labelledby="serviceModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="serviceModalLabel">
                      {selectedService.id ? "Edit Service" : "Add New Service"}
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit} className="p-4">
                      <div className="mb-3">
                        <label className="form-label">Service Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={selectedService.title}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="description"
                          value={selectedService.description}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn main-btn themeColorBg lightColor px-4 mt-3">
                        {selectedService.id ? "Update" : "Save"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            {/* <div className="row  mb-5 d-flex w-100 my-5">
              {ServiceList && ServiceList.length > 0 ? (
                ServiceList.map((item, index) => (
                  <div className="col-md-3" key={index}>
                    <div className="card border-2 themeBorder text-center py-3">
                      <div className="card-body d-flex flex-column ">
                      <div>
                 <i className="bi bi-browser-edge fs-1 themeColor mb-5"></i>
               </div>
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className="row">
                          <div className="col">
                            <button
                              className="btn themeColorBg lightColor px-3 mt-3 me-2 main-btn"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              onClick={() => setSelectedService(item)} // Set the selected service for editing
                            >
                              Edit
                            </button>
                            <button onClick={()=>{remove(item._id)}} className="btn themeBorder themeColor px-3 mt-3 smaller-font secondary-btn">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No services available</p>
              )}
            </div> */}
<div class="table-responsive">
<table class="table table-hover mb-5  w-100 my-5">
  <thead>
    <tr>
      
      <th scope="col-3">Service Name</th>
      <th scope="col-4">Description</th>
      <th scope="col-4">Action</th>
    </tr>
  </thead>
  <tbody>

     
              {ServiceList && ServiceList.length > 0 ? (
                ServiceList.map((item, index) => (
              //     <div className="col-md-3" key={index}>
              //       <div className="card border-2 themeBorder text-center py-3">
              //         <div className="card-body d-flex flex-column ">
              //         <div>
              //    <i className="bi bi-browser-edge fs-1 themeColor mb-5"></i>
              //  </div>
              //           <h5 className="card-title">{item.title}</h5>
              //           <p className="card-text">{item.description}</p>
              //           <div className="row">
              //             <div className="col">
              //               <button
              //                 className="btn themeColorBg lightColor px-3 mt-3 me-2 main-btn"
              //                 type="button"
              //                 data-bs-toggle="modal"
              //                 data-bs-target="#serviceModal"
              //                 onClick={() => setSelectedService(item)} // Set the selected service for editing
              //               >
              //                 Edit
              //               </button>
              //               <button onClick={()=>{remove(item._id)}} className="btn themeBorder themeColor px-3 mt-3 smaller-font secondary-btn">
              //                 Remove
              //               </button>
              //             </div>
              //           </div>
              //         </div>
              //       </div>
              //     </div>
              <tr key={index}>
              <td scope="row">{item.title}</td>
              <td>{item.description}</td>
              <td>  <div className="row">
                           <button
                              className="col-md-5 btn themeColorBg lightColor px-3 mt-1 me-1 main-btn"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#serviceModal"
                              onClick={() => setSelectedService(item)} // Set the selected service for editing
                            >
                              Edit
                            </button>
                            <button onClick={()=>{remove(item._id)}} className=" col-md-6 btn themeBorder themeColor px-3 mt-1 smaller-font secondary-btn">
                               Remove
                            </button>
                           
                        </div></td>
            </tr>
                ))
              ) : (
                <p>No services available</p>
              )}
  
   
  </tbody>
</table>
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardService;

