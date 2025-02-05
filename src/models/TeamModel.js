import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    name:{type:String,required:true,trim:true},
    designation:{type:String,required:true,trim:true}

}, {timestamps: true, versionKey: false});

const TeamModel=mongoose.model('teams', DataSchema);

export default TeamModel;
  