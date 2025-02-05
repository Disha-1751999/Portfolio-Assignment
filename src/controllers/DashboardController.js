import { SaveServices ,ReadServices,RemoveServices,SaveBlogs ,ReadBlogs,RemoveBlogs, SaveTeam ,ReadTeam,RemoveTeam} from "../services/DashboardServices.js";

export const SaveServicesController=async(req,res)=>{
    let result= await SaveServices(req);
        res.status(200).json(result);  
     
}

export const ReadServicesController=async(req,res)=>{
    let result= await ReadServices(req);
        res.status(200).json(result);  
     
}
export const RemoveServicesController=async(req,res)=>{
    let result= await RemoveServices(req);
        res.status(200).json(result);  
     
}


export const SaveBlogController=async(req,res)=>{
    let result= await SaveBlogs(req);
        res.status(200).json(result);  
     
}

export const ReadBlogController=async(req,res)=>{
    let result= await ReadBlogs(req);
        res.status(200).json(result);  
     
}
export const RemoveBlogController=async(req,res)=>{
    let result= await RemoveBlogs(req);
        res.status(200).json(result);  
     
}

export const SaveTeamController=async(req,res)=>{
    let result= await SaveTeam(req);
        res.status(200).json(result);  
     
}

export const ReadTeamController=async(req,res)=>{
    let result= await ReadTeam(req);
        res.status(200).json(result);  
     
}
export const RemoveTeamController=async(req,res)=>{
    let result= await RemoveTeam(req);
        res.status(200).json(result);  
     
}


