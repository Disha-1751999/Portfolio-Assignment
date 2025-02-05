import {create} from 'zustand';
import axios  from "axios";
import {getEmail, setEmail, unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";


const DashboardStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },

    UserLoginRequest:async(reqBody)=>{
        let res=await axios.post(`/api/login`,reqBody);
        return res.data['status'] === "success";
    },

    UserLogoutRequest:async()=>{
        let res=await axios.post(`/api/logout`);
        return res.data['status'] === "success";
    },

    SaveServiceRequest:async(reqBody)=>{
        let res=await axios.post(`/api/saveService`,reqBody);
        return res.data['status'] === "success";
    },

    RemoveServiceRequest:async(id)=>{
        let res=await axios.post(`/api/removeService/${id}`);
        return res.data['status'] === "success";
    },



    ServiceList:null,
    ReadServiceRequest:async(reqBody)=>{
        let res=await axios.get(`/api/readService`,reqBody);
        if(res.data['data']){         
        set({ServiceList:res.data['data']})
        }
        return res.data['status'] === "success";
    },




    SaveBlogRequest:async(reqBody)=>{
        console.log(reqBody)
        let res=await axios.post(`/api/saveBlog`,reqBody);
        console.log(res)
        return res.data['status'] === "success";
    },

    RemoveBlogRequest:async(id)=>{
        let res=await axios.post(`/api/removeBlog/${id}`);
        return res.data['status'] === "success";
    },



    BlogList:null,
    ReadBlogRequest:async(reqBody)=>{
        let res=await axios.get(`/api/readBlog`,reqBody);
        if(res.data['data']){         
        set({BlogList:res.data['data']})
        }
        return res.data['status'] === "success";
    },


    SaveTeamRequest:async(reqBody)=>{
        let res=await axios.post(`/api/saveTeam`,reqBody);
        return res.data['status'] === "success";
    },

    RemoveTeamRequest:async(id)=>{
        let res=await axios.post(`/api/removeTeam/${id}`);
        return res.data['status'] === "success";
    },



    TeamList:null,
    ReadTeamRequest:async(reqBody)=>{
        let res=await axios.get(`/api/readTeam`,reqBody);
        if(res.data['data']){         
        set({TeamList:res.data['data']})
        }
        return res.data['status'] === "success";
    },





   






    


}))

export default DashboardStore;