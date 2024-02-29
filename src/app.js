 import express  from "express";
const app=express()

import dotenv from "dotenv";
import connectDB from "./db/connection.js";
dotenv.config({
    path:`./.env`
})

import bodyParser from 'body-parser';
app.use(bodyParser.json())

import userRouter from './routes/userroutes.js'
app.use("/person",userRouter);

import menuRouter from './routes/menuroutes.js';
app.use("/menu",menuRouter)
  

const PORT=process.env.PORT 

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
connectDB()
