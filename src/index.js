import dotenv from 'dotenv';
dotenv.config();
import { app } from './app.js';
import connectDB from "./db/index.js";
connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log("Server is running at PORT ",process.env.PORT);
    })
})
.catch((err)=>{
    console.log("MONGODB connection Falied: ",err);
})
