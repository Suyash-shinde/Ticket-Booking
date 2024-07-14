import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';


const port = process.env.PORT;
const app=express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    console.log(`App is listening on port: http://localhost:${port}`);
})