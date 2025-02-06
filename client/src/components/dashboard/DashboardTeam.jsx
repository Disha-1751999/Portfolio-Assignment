import React, { useEffect, useState } from "react";
import DashboardStore from "../../store/DashboardStore";
import { toast } from "react-hot-toast";
import userImg from "../../assets/images/user.avif"

function DashboardTeam() {
   

  const { SaveTeamRequest, ReadTeamRequest, TeamList, RemoveTeamRequest } = DashboardStore();

  // State to store selected service for editing
  const [selectedTeam, setSelectedTeam] = useState({
    name: "",
    designation: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setSelectedTeam({
      ...selectedTeam,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (Add/Edit Service)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      // If it exists, it's an update; otherwise, it's new
      name: selectedTeam.name,
      designation: selectedTeam.designation
    };

    let response = await SaveTeamRequest(reqBody);

    if (response) {
      toast.success(selectedTeam.id ? "Updated Successfully" : "Saved Successfully");
      setSelectedTeam({ 
        
        name: "", designation: "" }); 
      await ReadTeamRequest(); 
    } else {
      toast.error("Error");
    }
  };


  useEffect(() => {
    (async () => {
      await ReadTeamRequest();
    })();
  }, []);


  const remove=async(id)=>{
    let response=await RemoveTeamRequest(id)
    if(response){
      toast.success('Removed')
      await ReadTeamRequest();
    }
  }



  return (
   
    
    <div className="container">
  <div className="row mt-3">
    <div className="col-12">
      <button
        className="btn themeColorBg lightColor px-3 mt-3 main-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#TeamModal"
        onClick={() => setSelectedTeam({ id: null, name: "", designation: "" })}
      >
        Add New Team Member
      </button>

      {/* Add/Edit Service Modal */}
      <div className="modal fade text-dark" id="TeamModal" tabIndex="-1" aria-labelledby="TeamModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="TeamModalLabel">
                {selectedTeam.id ? "Edit Team " : "Add New Team Member"}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={selectedTeam.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Designation</label>
                  <input
                    type="text"
                    className="form-control"
                    name="designation"
                    value={selectedTeam.designation}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                
                <button type="submit" className="btn main-btn themeColorBg lightColor px-4 mt-3">
                  {selectedTeam.id ? "Update" : "Save"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {TeamList && TeamList.length > 0 ? (
              <div className="table-responsive p-2">
                <table className="table table-hover mb-5 w-100 my-5">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TeamList && TeamList.length > 0 ? (
                      TeamList.map((item, index) => (
                        <tr key={index}>
                          <td><img
              src={userImg}
              className="card-img-top roundedImage"
              alt="..."
              style={{width: "50px" , height: "50px"}}
            /></td>
                          <td>{item.name}</td>
                          <td> {item.designation}</td>
                          <td>
                            <div className="d-flex justify-content-start gap-2 flex-wrap">
                              <button
                                className="btn themeColorBg lightColor px-3 mt-3 me-2 main-btn"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#TeamModal"
                                onClick={() => setSelectedTeam(item)}
                              >
                                Edit
                              </button>
                              <button
                               onClick={()=>{remove(item._id)}} className="btn themeBorder themeColor px-3 mt-3 smaller-font secondary-btn"
                              >
                                Remove
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <div class="text-center mt-5 me-auto ms-auto ">
                <div class="spinner-border text-success bg-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
      {/* <div className="row  mb-5 d-flex w-100 my-5 row row-cols-1 row-cols-md-3  row-cols-lg-4  g-4 mb-5">
        {TeamList && TeamList.length > 0 ? (


        TeamList.map((item,index)=>{
          return(
            <div className="col">
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
                <div className="row">
                      <div className="col">
                        <button
                          className="btn themeColorBg lightColor px-3 mt-3 me-2 main-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#TeamModal"
                          onClick={() => setSelectedTeam(item)} // Set the selected service for editing
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
          )
        })     
        ) : (
          <p></p>
        )}
      </div> */}
    </div>
  </div>
</div>
  )
}

export default DashboardTeam