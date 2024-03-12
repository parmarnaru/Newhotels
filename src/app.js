 import express  from "express";
const app=express()

import dotenv from "dotenv";
import connectDB from "./db/connection.js";
dotenv.config({
    path:`./.env`
})

// import body-parser
import bodyParser from 'body-parser';
app.use(bodyParser.json())

// import pasport local
import passport from "passport";
import LocalStrategy from 'passport-local';


passport.use(new LocalStrategy(async(username,password,done)=>{
// authentication logic here
try{
  console.log(`Received credential :`,username,password);
  const person = await UserSchemaModal.findOne({username:username});
  if(!person)
  return done(null,false,{message:"Incorrect username"})

  const ispasswordMatch=person.password === password ? true : false;
  if(ispasswordMatch){
    return done(null,person);
  }
  else{
    return done(null ,false,{ message:"Incorrect password"});

  }

}
catch(err){
  return done (err);
}
}))



// middleware function
const logrequest=(req,res,next)=>{
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`)
  next();
}
app.use(logrequest);
app.use(passport.initialize());

app.get ('/' ,passport.authenticate(`local`,{session:false}),function (req,res){
  res.send(`welcome to our Hotel !`);
  
})

import userRouter from './routes/userroutes.js'
app.use("/person",userRouter);

import menuRouter from './routes/menuroutes.js';
import UserSchemaModal from "./model/userschema.js";
app.use("/menu",menuRouter)
  

const PORT=process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
connectDB()
