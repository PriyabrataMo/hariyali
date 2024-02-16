import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import connectDB from "./db/index.js";
connectDB()

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');  
}
);