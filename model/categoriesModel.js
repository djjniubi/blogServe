import mongoose from "mongoose";

const categoriesType={
    categoriesName:{
        type:String,
        required:true,
    },
    categoriesCode:{
        type:String || Number,
        required:true,
    }
}