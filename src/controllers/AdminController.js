import { LoginServices,SendMail } from "../services/AdminServices.js";

export const Login=async(req,res)=>{
    let result= await LoginServices(req);
    if(result.status=='success'){
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly: true, // Prevents client-side access (for security)
            secure: true, // Ensures cookies are only set over HTTPS
            sameSite: "None"}
        res.cookie('token',result['token'],cookieOption);
        res.status(200).json(result);  
    }else{ 
        res.status(400).json(result)
    }
   
}


export const Logout=async (req,res)=>{
    let cookieOption={expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',"",cookieOption)
    return res.status(200).json({status:"success"})
}

export const SendMailController=async (req,res)=>{
    let result= await SendMail(req)
    return res.status(200).json(result)
}