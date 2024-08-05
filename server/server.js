import express from "express";
import dotenv from "dotenv";
import dbConnect  from "./utils/db.js";
import router from "./routes/routes.js";
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const port = process.env.PORT || 4000;
dbConnect();


app.use('/api',router);


app.listen(port, () => {
  console.log(`SERVER is running on port : ${port}`);
});
