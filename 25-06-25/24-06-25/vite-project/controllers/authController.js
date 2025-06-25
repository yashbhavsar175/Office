import {User} from '../models/user.js'

// handle erroe
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {email : '', password : ''}

    if (err.code === 11000){ // bcz duplicate error key is 11000
        errors.email = "Email is already Registered";
        return errors;
    }


    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        });
    }
    return errors
}

export const signup_get = (req, res)=>{
    res.json({ message: 'signup' }); 
}
export const login_get = (req, res)=>{
    res.json({ message: 'Login' }); 
}
export const signup_post = async (req, res)=>{
    // res.send('new signup');
    const {email,password} = req.body;
    try {
        const user = await User.create({email,password});
        res.status(201).json(user)
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
    // console.table({"Email" : email, "Password" : password});
}
export const login_post = (req, res)=>{
    const {email,password} = req.body;
    console.table({"Email" : email, "Password" : password});
    res.send('User login');
}