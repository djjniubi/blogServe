import mongoose from "mongoose";

//文章类型模型
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

//链接类型模型
const linkType={
    linkTypeName:{
        type:String,
        required:true,
    },
    linkTypeCode:{
        type:String || Number,
        default:0,
    }
}

const schema = mongoose.Schema

export const categoriesModel=mongoose.model("categories",new schema(categoriesType))
export const linkTypeModel =mongoose.model("link_type",new schema(linkType))