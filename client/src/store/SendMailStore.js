import {create} from 'zustand';
import axios  from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SendMailStore=create((set)=>({

    SendMailRequest:async(reqBody)=>{
        let res=await axios.post(`${API_BASE_URL}/api/sendMail`,reqBody);
        return res.data['status'] === "success";
    },

}))

export default SendMailStore;