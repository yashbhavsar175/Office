import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'
// handle erroe
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' }

    if (err.code === 11000) { // bcz duplicate error key is 11000
        errors.email = "Email is already Registered";
        return errors;
    }
 
   if (err.message === "incorrect email") {
        errors.email = "Email is not registered";
    }

    if (err.message === "incorrect password") {
        errors.password = "Incorrect password";
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors
}

let maxAges =  60
const createToken = (id) => {

    return jwt.sign({ id }, 'Yash Bhavsar', {
        expiresIn: maxAges
    })

}

export const signup_get = (req, res) => {
    res.json({ message: 'signup' });
}
export const login_get = (req, res) => {
    res.json({ message: 'Login' });
}
export const signup_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        res.status(201).json({ message: "Signup successful, please login" });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

export const login_post = async (req, res) => {
    const { email, password } = req.body;
    // console.table({"Email" : email, "Password" : password});
    // res.send('User login');
    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
         res.cookie('jwt', token, {  maxAge: maxAges * 1000 });
        res.status(200).json({user : user._id})
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}