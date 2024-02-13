import express from "express";
import mongoose from "mongoose";
mongoose.connect('mongodb+srv://adminhariyali:hariyali@hariyali.ttkzgp2.mongodb.net/?retryWrites=true&w=majority')


const app = express();


app.listen(3000, () => {
  console.log('Server is running on port 3000');  
}
);