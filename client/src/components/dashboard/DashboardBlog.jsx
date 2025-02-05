import React, { useEffect, useState } from "react";
import DashboardStore from "../../store/DashboardStore";
import { toast } from "react-hot-toast";

function DashboardBlog() {

  const { SaveBlogRequest, ReadBlogRequest, BlogList, RemoveBlogRequest } = DashboardStore();

  // State to store selected service for editing
  const [selectedBlog, setSelectedBlog] = useState({
    title: "",
    description: "",
    img:""
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setSelectedBlog({
      ...selectedBlog,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission (Add/Edit Service)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const reqBody = {
      // If it exists, it's an update; otherwise, it's new
      title: selectedBlog.title,
      description: selectedBlog.description,
      img: selectedBlog.img
    };

    let response = await SaveBlogRequest(reqBody);

    if (response) {
      toast.success(selectedBlog.id ? "Updated Successfully" : "Saved Successfully");
      setSelectedBlog({ 
        
        title: "", description: "" , img: ""}); // Reset state
     // document.getElementById("closeModal").click(); // Close the modal
      await ReadBlogRequest(); // Refresh the service list
    } else {
      toast.error("Error");
    }
  };

  // Load services on component mount
  useEffect(() => {
    (async () => {
      await ReadBlogRequest();
    })();
  }, []);


  const remove=async(id)=>{
    let response=await RemoveBlogRequest(id)
    if(response){
      toast.success('Removed')
      await ReadBlogRequest();
    }
  }


  return (
    // <div className="container">
    //     <div className="row mt-3">
    //         <div className="col-12">
    //         <button className='btn themeColorBg lightColor px-3 mt-3 main-btn'>Add New Blog</button>
    //         </div>
    //     </div>
    //     <div className="row my-3 row-cols-1 row-cols-md-3  row-cols-lg-4  g-4 mb-5">
    //     <div className="col">
    //       <div className="card border-2 themeBorder">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VIYNkS-Hsk6R7hChTDyUq3Q_D2-IsR-JvQ&s"
    //           className="card-img-top"
    //           alt="..."
    //         />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </p>
    //           <button className='btn themeColorBg lightColor px-3 mt-3 me-2 main-btn'>Edit</button>
    //            <button className="btn themeBorder themeColor px-3 mt-3 smaller-font secondary-btn">Remove</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col">
    //       <div className="card">
    //         <img src="..." className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col">
    //       <div className="card">
    //         <img src="..." className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col">
    //       <div className="card">
    //         <img src="..." className="card-img-top" alt="..." />
    //         <div className="card-body">
    //           <h5 className="card-title">Card title</h5>
    //           <p className="card-text">
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>

<>
<div className="container">
  <div className="row mt-3">
    <div className="col-12">
      <button
        className="btn themeColorBg lightColor px-3 mt-3 main-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#BlogModal"
        onClick={() => setSelectedBlog({ id: null, title: "", description: "", img:"" })}
      >
        Add New Blog
      </button>

      {/* Add/Edit Service Modal */}
      <div className="modal fade text-dark" id="BlogModal" tabIndex="-1" aria-labelledby="BlogModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="BlogModalLabel">
                {selectedBlog.id ? "Edit Blog" : "Add NewBlog"}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-3">
                  <label className="form-label">Blog Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={selectedBlog.title}
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
                    value={selectedBlog.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="img"
                    value={selectedBlog.img}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn main-btn themeColorBg lightColor px-4 mt-3">
                  {selectedBlog.id ? "Update" : "Save"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="row  mb-5 d-flex w-100 my-5 row row-cols-1 row-cols-md-3  row-cols-lg-4  g-4 mb-5">
        {BlogList && BlogList.length > 0 ? (


        BlogList.map((item,index)=>{
          return(
            <div className="col">
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
                <div className="row">
                      <div className="col">
                        <button
                          className="btn themeColorBg lightColor px-3 mt-3 me-2 main-btn"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#BlogModal"
                          onClick={() => setSelectedBlog(item)} // Set the selected service for editing
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
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default DashboardBlog