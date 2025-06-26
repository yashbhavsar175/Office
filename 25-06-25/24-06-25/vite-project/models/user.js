import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

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

userschema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

userschema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
    }
    throw Error("incorrect email");
}


export const User = mongoose.model('user', userschema)
