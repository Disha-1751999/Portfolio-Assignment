import {create} from 'zustand';
import axios  from "axios";


const SendMailStore=create((set)=>({

    SendMailRequest:async(reqBody)=>{
        let res=await axios.post(`/api/sendMail`,reqBody);
        return res.data['status'] === "success";
    },

}))

export default SendMailStore;