import mongoose  from "mongoose";
// define the user schema
const menushema=mongoose.Schema({
    name:{
        type:String,
        required:true,
     },
    price:{
        type:Number,

    },
    type:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },
    is_drink:{
        type:Boolean,
        default:false,

    },
    price:{
        type:Number,

    },
    num_sales:{
        type:Number,
        default:0,
    }
})
const MenuSchemaModal=mongoose.model("menuItem",menushema);
export default MenuSchemaModal;