export const signup_get = (req, res)=>{
    res.json({ message: 'signup' }); 
}
export const login_get = (req, res)=>{
    res.json({ message: 'Login' }); //res.render('Login')
}
export const signup_post = (req, res)=>{
    res.send('new signup');
    const {email,password} = req.body;
    console.table({"Email" : email, "Password" : password});
}
export const login_post = (req, res)=>{
    const {email,password} = req.body;
    console.table({"Email" : email, "Password" : password});
    res.send('User login');
}