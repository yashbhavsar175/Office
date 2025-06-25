import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from '../routes/authRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())

const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
  .then((result) => app.listen(3000,()  =>{
    console.log("Backend is running...")
  }))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.json({ message: 'App' }));
app.get('/smoothies', (req, res) => res.json({ message: 'smoothies' }));
app.use(authRoutes);