import  express from "express";
const router=express.Router();

import MenuSchemaModal from "../model/menuschema.js";


// menu controller
router.post("/",async (req,res)=>{
    try{
           const menudetails=req.body
            const newmenu= new MenuSchemaModal(menudetails);
            const response=await newmenu.save()
            console.log("menuItem saved ");
            res.status(200).json(response);
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:"internal error"});
  
    }
  })
  // get menu item find
  router.get("/",async(req,res)=>{
    try{
          const menudetails= await MenuSchemaModal.find();
          console.log("menuItem  find...");
      res.status(200).json(menudetails);
    }
    catch(err){
      console.log(err);
       res.status(500).json({err:"internal error"})
      }
  })

export default router