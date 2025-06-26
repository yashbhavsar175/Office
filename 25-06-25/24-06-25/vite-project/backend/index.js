import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from '../routes/authRoutes.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import requireAuth from '../middleware/authMiddleware.js'

dotenv.config();
const app = express();
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
  .then((result) => app.listen(3000,()  =>{
    console.log("Backend is running...")
  }))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.json({ message: 'App' }));
app.get('/smoothies', requireAuth, (req, res) => { res.json({ message: 'Smoothies' });});
app.use(authRoutes);

// app.get('/set-cookies',(req,res)=>{
//   // res.setHeader('Set-Cookie','newUser=true')
//   res.cookie('newUser', false)
//   res.cookie('isEmployee', true, {maxAge:1000*60*60*24, httpOnly: true} )
//   res.send('you get the cookie');
// })

// app.get('/read-cookies',(req,res)=>{
//    const cookies = req.cookies;
//    console.log(cookies)
//    res.json(cookies)
// })