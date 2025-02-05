import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    title:{type:String,unique:true,required:true,trim:true},
    description:{type:String,required:true,trim:true}

}, {timestamps: true, versionKey: false});

const ServiceModel=mongoose.model('services', DataSchema);

export default ServiceModel;
  