// const express = require('express');
// const mongoose = require('mongoose');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();
app.use(cors())
app.use(express.json())
// database connection
const dbURI = 'mongodb+srv://Yash:bJez_6%25s.MkbHqK@yash.8csvdxf.mongodb.net/Yash';
mongoose.connect(dbURI)
  .then((result) => app.listen(3000,()  =>{
    console.log("Backend is running...")
  }))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('App'));
app.get('/smoothies', (req, res) => res.render('smoothies'));