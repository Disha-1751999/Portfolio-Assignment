import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
//import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoose from 'mongoose';
import expressFileUpload from 'express-fileupload';
import {MAX_JSON_SIZE,  REQUEST_NUMBER, REQUEST_TIME, URL_ENCODE, WEB_CACHE} from './src/config/config.js';
import  dotenv from 'dotenv';
import router from './routes/api.js'
import path from 'path'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app=express();


app.use(cookieParser());
app.use(cors({ origin: "https://portfolio-assignment-client.vercel.app",credentials: true}));
app.use(helmet());
app.use(hpp());



app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended:  URL_ENCODE }));


// App Use Limiter
// const limiter= rateLimit({windowMs: REQUEST_TIME,max: REQUEST_NUMBER})
// app.use(limiter)

// Cache
app.set('etag',WEB_CACHE)

// Database Connect
mongoose.connect(process.env.DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB connected");
}).catch(()=>{
    console.log("MongoDB disconnected");
})



app.use("/api",router);
 

app.use(express.static('client/dist'));

// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

// Undefined Routing
app.get('*',function (req,res) {
    res.status(404).send({'message': ' Undefined Route '})
})




export default app;





