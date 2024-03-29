import mongoose, {Schema, Types} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const productSchema = new Schema({
    productName:{
        type: String,
        required: true,
    },
    productPhotos:[{
        type: String,
    }],
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    views:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

productSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product" , productSchema) 