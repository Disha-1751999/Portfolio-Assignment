import AdminModel from "../models/AdminModel.js";
import { TokenEncode } from "../utilities/tokenUtility.js";

import SendEmail from './../utilities/emailUtility.js';

export const LoginServices= async (req, res)=>{

    try {
       let {email,password}=req.body
       let user= await AdminModel.findOne({email:email,password:password});
       if(user){
       let token= await TokenEncode(email,password)
       if(token){
        return {status:"success", message:"Login Successful..!", 'token': token}
       }else{
        return {status:"fail", message:"Something went wrong..!"}
       }
        
       }else{
           
       return {status:"fail", message:"Something went wrong..!"}
       }
       

    } catch (error) {
        return {status:"fail", message:error.toString()}
    }
    

}

export const OtpVerificationServices= async (req, res)=>{

    try {
        let email= req.params.email;
        let otp= req.params.otp;

        let user=await UserModel.find({email:email,otp:otp});
        
        if(user.length===1){

            let token=TokenEncode(email,user[0]['_id']);
            await UserModel.updateOne({email:email},{$set:{otp:"0"}})
            return {status:"success", message:"Valid OTP ", "token":token};
        }else{
            return {status:"fail", message:"Invalid OTP"};
        }
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}

export const SendMail= async (req, res)=>{

    try {
        const {email,subject,message} =req.body;
        let response=await SendEmail(email,message,subject)
        console.log(response)
        return {status:"success"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}