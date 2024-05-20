import mongoose from "mongoose";

const tableModel = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    numTab: {
        type:Number,
        required:true
    },
    numMem: {
        type:Number,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    
},{timestamps:true});

export const Table = mongoose.model("Table",tableModel);