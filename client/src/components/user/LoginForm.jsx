import React, { useEffect } from "react";
import DashboardStore from "../../store/DashboardStore";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function LoginForm() {

  const {isLogin,UserLoginRequest}=DashboardStore();
  const navigate= useNavigate();

  const handleLogin=async(e)=>{
       e.preventDefault();
       const formdata=new FormData(e.target)
       let reqBody={
        email:formdata.get('email'),
        password:formdata.get('password')
       }

       let response= await UserLoginRequest(reqBody);
       if(response){
        toast.success('Login Successfully..!')
        navigate('/dashboard')
       }
       else
       {
        toast.error('Please ensure you provided correct information..!')
       }
       
       
       
  }

  useEffect(()=>{
     (async()=>{ 
     const isLoggedIn=await isLogin()
     if(isLoggedIn){
      navigate('/dashboard')
     }
    
    })()
  },[])

  return (
    <>
      <div className="container my-5 " style={{ height: "85vh" }}>
        <div className="d-flex justify-content-center align-items-center flex-column h-100 ">
          <div className="row">
            <h2 className="text-center lightColor mb-5 ">Login to Dashboard</h2>
          </div>
          <div className="row ">
            <div className="col-12 mx-auto lightColor themeBorder rounded p-4">
              <div>
                <form onSubmit={handleLogin} className="d-flex justify-content-center align-items-center flex-column h-100 mt-5 mt-md-0 p-4">
                  <div className="mb-3 ">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email"/>
                  </div>

                  <div className="mb-3 ">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"/>
                  </div>

                  
                    <button type="submit" className="btn main-btn themeColorBg lightColor px-4 mt-3">
                      Login
                    </button>
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
