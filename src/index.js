import dotenv from 'dotenv';
dotenv.config();

import connectDB from "./db/index.js";
connectDB()

const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000');  
}
);