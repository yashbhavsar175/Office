import mongoose from 'mongoose';
import validator from 'validator';

const userschema = new mongoose.Schema({
    email:{
        type: String,
        required : [true,'Please Enter Your Email'],
        unique : true,
        lowercase : true,
        validate : [validator.isEmail,'Please Enter Validate Email']
    },
    password:{
        type:String,
        required:[true,'Please Enter Password'],
        minlength: [6,'Password Must be Minimum 6 Character']
    }
})

userschema.pre('save', function(next){
    
    next();
})

export const User = mongoose.model('user', userschema)
