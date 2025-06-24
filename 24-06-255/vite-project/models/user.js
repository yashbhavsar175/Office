import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
    email:{
        type: String,
        required : true,
        unique : true,
        lowercase : true
    },
    password:{
        type:String,
        required:true,
        minLength: 6
    }
})

export const User = mongoose.model('user', userschema)
