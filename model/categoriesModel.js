import mongoose from "mongoose";

const categoriesType={
    categoriesName:{
        type:String,
        required:true,
    },
    categoriesCode:{
        type:String || Number,
        default:0,
    }
}

const schema = mongoose.Schema

const categoriesModel=mongoose.model("categories",new schema(categoriesType))
export default categoriesModel