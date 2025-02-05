import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    email:{type:String,unique:true,required:true,lowercase:true,trim:true},
    password:{type:String,required:true,trim:true}

}, {timestamps: true, versionKey: false});

const AdminModel=mongoose.model('admins', DataSchema);

export default AdminModel;