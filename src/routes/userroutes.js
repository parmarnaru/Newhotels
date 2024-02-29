import  express from "express";
const router=express.Router();
import UserSchemaModal from "../model/userschema.js";

// POST route to add  a parsan
router.post("/",async(req,res)=>{
    try{
      const userdetails=req.body //Asswuming the request body contains the person data
      //create a new person document using the mongoose model
      const newpersan= new UserSchemaModal(userdetails);
      // save the person to the database
      const response=await newpersan.save();
      console.log("succfully saved data in the database...");
      res.status(200).json(response)
  }
    catch(err){
       console.log(err);
       res.status(500).json({err:"internal error"})
    }
  })
  // GET method to get the person
  router.get("/",async(req,res)=>{
    try{
          const userdetails= await UserSchemaModal.find();
          console.log("succfully saved data in the database...");
      res.status(200).json(userdetails);
    }
    catch(err){
      console.log(err);
       res.status(500).json({err:"internal error"})
      }
  })
  router.get('/:workType',async(req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef' || workType=='waiter' || workType=='manager')
      {
        const response=await UserSchemaModal.find({work:workType});
        console.log('response fetched ');
        res.status(200).json(response);
      }else{
        res.status(404).json({error:'Invalid work type'})

      }  
    }
    catch(err){
     console.log(err)
     res.status(500).json({error:"Internal servar error"})
    }
  })
  export default router;