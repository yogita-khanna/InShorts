import express from 'express';
import dotenv from 'dotenv';
import cors from'cors';

import Connection from './database/db.js';
import Route from './routes/route.js';
import DefaultData from './default.js';

dotenv.config();

const app = express();

app.use(cors());
app.use('/', Route)


const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, ()=>{
    console.log(`server is started successfully on PORT ${PORT}`);
})

DefaultData();