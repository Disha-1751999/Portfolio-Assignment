import React, { useState } from "react";
import contactImg from "../../assets/images/contact.png";
import SendMailStore from "../../store/SendMailStore";
import { toast } from 'react-hot-toast';

function ContactForm() {
  const {SendMailRequest}=SendMailStore()
  const [loading, setLoading]= useState(false)

 const handleSubmit=async(e)=>{
    e.preventDefault();
    const formdata= new FormData(e.target);
    const email= formdata.get('email')
    const subject= formdata.get('subject')
    const message= formdata.get('message')

   const reqBody={
      email: email,
      subject : subject,
      message : message
    }
  setLoading(true)
  let response=  await SendMailRequest(reqBody);
  setLoading(false)
  if(response){
    toast.success('Message Sent')
    e.target.reset()
  }
  else{
    toast.error('Error')
  }
 }


  return (
    <div className="container lightColor " style={{marginTop: '7rem', marginBottom: '7rem'}} >
      <div className="row">
        <div className="col-md-6 ">
            <div className="d-flex justify-content-center flex-column h-100">
            <h2>Got a project in </h2>
          <h2><span className="themeColor">mind?</span></h2>
          
          <div>
            <img src={contactImg} alt=""  style={{width: '10rem', marginLeft: '5rem'}}/>
          </div>
            </div>
          
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <form onSubmit={handleSubmit} className="d-flex justify-content-center flex-column h-100 mt-5 mt-md-0">
           
            <div className="d-flex gap-3">
            <div className="mb-3 w-100 w-md-50">
                <label
                  className="form-label"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  required
                />
              </div>
              <div className="mb-3 w-100 w-md-50">
                <label
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required
                />
              </div>
            </div>
              <div className="mb-3">
                <label
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={3}
                  defaultValue={""}
                  required
                />
              </div>
             <div className="mb-3">

              {
                loading?(
                  <button className="btn themeColorBg lightColor px-3 mt-3 main-btn" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  <span role="status">Sending...</span>
                </button>

                ):(
                  <button type="submit" className='btn themeColorBg lightColor px-3 mt-3 main-btn'>Send Massage</button>
                )
              }
             
             </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
