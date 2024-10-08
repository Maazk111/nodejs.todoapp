import mongoose from "mongoose";


// Schema
const Schema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true,
        select: false
    },
    createAt:{
        type:Date,
        default:Date.now,
    }
});


export const User = mongoose.model("user", Schema);

