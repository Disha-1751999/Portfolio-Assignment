import ServiceModel from "../models/ServiceModel.js";
import BlogModel from "../models/BlogModel.js";
import TeamModel from "../models/TeamModel.js";

export const SaveServices= async (req, res)=>{

    try {
        
        let reqBody=req.body;
        await ServiceModel.updateOne({title:reqBody.title},{$set:reqBody}, {upsert: true});
        return {status:"success", message:"Save successfully"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const ReadServices= async (req, res)=>{

    try {
        
       let data= await ServiceModel.find({});
        return {status:"success", data:data};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const RemoveServices= async (req, res)=>{

    try {
        let id=req.params.id
       let data= await ServiceModel.deleteOne({_id:id});
        return {status:"success"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const SaveBlogs= async (req, res)=>{

    try {
        
        let reqBody=req.body;
        await BlogModel.updateOne({title:reqBody.title},{$set:reqBody}, {upsert: true});
        return {status:"success", message:"Save successfully"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const ReadBlogs= async (req, res)=>{

    try {
        
       let data= await BlogModel.find({});
        return {status:"success", data:data};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const RemoveBlogs= async (req, res)=>{

    try {
        let id=req.params.id
       let data= await BlogModel.deleteOne({_id:id});
        return {status:"success"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}

export const SaveTeam= async (req, res)=>{

    try {
        
        let reqBody=req.body;
        await TeamModel.updateOne({name:reqBody.name},{$set:reqBody}, {upsert: true});
        return {status:"success", message:"Save successfully"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const ReadTeam= async (req, res)=>{

    try {
        
       let data= await TeamModel.find({});
        return {status:"success", data:data};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


export const RemoveTeam= async (req, res)=>{

    try {
        let id=req.params.id
       let data= await TeamModel.deleteOne({_id:id});
        return {status:"success"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}


