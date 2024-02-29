import mongoose from "mongoose";
import {DB_NAME} from '../constant.js';  // db is a another contint

   const connectDB =async()=>{
    try{
       const connctionInstance= await mongoose.connect
       (`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n MongoDB connecte !! DB Host:${connctionInstance.connection.host}`);

    }
    catch(error){
        console.log("MONGODB CONCTION failed ??",error);
        process.exit(1);
    }
}
export default connectDB