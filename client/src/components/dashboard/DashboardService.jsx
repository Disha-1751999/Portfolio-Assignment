
import React, { useEffect, useState } from "react";
import DashboardStore from "../../store/DashboardStore";
import { toast } from "react-hot-toast";
import TableSkeleton from "../../skeleton/TableSkeleton";

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

            
            <div className="table-responsive p-2">
  <table className="table table-hover mb-5 w-100 my-5">
    <thead className="table-dark"> 
      <tr>
        <th scope="col">Service Name</th>
        <th scope="col">Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {ServiceList && ServiceList.length > 0 ? (
        ServiceList.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>
              <div className="d-flex justify-content-start gap-2 flex-wrap">
                <button
                  className="btn btn-sm themeColorBg lightColor px-2 main-btn"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#serviceModal"
                  onClick={() => setSelectedService(item)}
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(item._id)}
                  className="btn btn-sm themeBorder themeColor px-2 secondary-btn"
                >
                  Remove
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
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

