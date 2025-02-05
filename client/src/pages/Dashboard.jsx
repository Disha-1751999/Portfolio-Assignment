import React, { useEffect } from "react";
import DashboardComponent from "../components/dashboard/DashboardComponent";
import { useNavigate } from "react-router-dom";
import DashboardStore from "../store/DashboardStore";

function Dashboard() {
  const navigate= useNavigate()
  const {isLogin}=DashboardStore();

  useEffect(()=>{
       (async()=>{ 
       const isLoggedIn=await isLogin()
       if(!isLoggedIn){
        navigate('/login')
       }
      
      })()
    },[])
  return (
    <>
      <DashboardComponent/>
    </>
  );
}

export default Dashboard;
