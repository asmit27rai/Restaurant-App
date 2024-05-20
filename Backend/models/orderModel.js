import mongoose from "mongoose";

const orderModel = new mongoose.Schema({
    address: {
        type:String,
        required:true
    },
    numDis: {
        type:Number,
        required:true,
    },
    totPri: {
        type:String,
        required:true
    },
},{timestamps:true});

export const Order = mongoose.model("Order",orderModel);