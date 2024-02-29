import mongoose  from "mongoose";
// define the user schema
const usershema=mongoose.Schema({
    name:{
        type:String,
        required:true,
     },
     work:{
      type:String,
      enum:['chef','waiter','manager'],
      required:true,

  },
     age:{
       type:Number,
     },
     mobile:{
        type:String,
        required:true["mobile num is requ"],
     },
     email:{
        type:String,
        required:true,
        
     },
     password:{
           type:Number,
          required:true,

     },
     address:{
        type:String,

     },
     salary:{
        type:Number,
        required:true,
     },
     
   
})
const UserSchemaModal=mongoose.model("user",usershema)
export default UserSchemaModal;