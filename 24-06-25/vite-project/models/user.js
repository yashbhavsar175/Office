import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    email:{
        type: String,
        required : [true,'Please Enter Your Email'],
        unique : [true,'Email is already Registered'],
        lowercase : true
    },
    password:{
        type:String,
        required:[true,'Please Enter Password'],
        minLength: [6,'Password Must be Minimum 6 Character']
    }
})

export const User = mongoose.model('user', userschema)
