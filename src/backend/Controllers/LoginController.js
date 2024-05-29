const User = require("../Databases/Mongo");
const bcrypt = require("bcryptjs")
const passport = require("passport")

const signup = (req,res) =>{
    const { name,email,password,password2,gender,mobile,date,city,state,country} = req.body;
    console.log(name,email,password,password2,gender,mobile,date,city,country);
    const loweremail=email.toLowerCase();
    let errors = [];
    // Check Required Fields
    if(!name|| !loweremail|| !password|| !mobile|| !gender) {
        errors.push({msg:'Please fill in all fields'});
    }
    // Check Password length
    if(password.length < 6){
        errors.push({ msg:'Passwords should be atleast 6 characters'})
    }
    // check passwords match
    if(password!= password2) {
        errors.push({ msg:'Password do not match'})
    }
    // Check password length 
    if(errors.length>0){
        res.render('signup',{
            errors,
            name,
            email,
            password,
            mobile,
            city,
            state,
            country
        })
    }

    else{
        // Validation Passed 
        User.findOne({
            email:loweremail,
        })
        .then(user=>{
            if(user) {
                // User Exists
                errors.push({msg:'Email is already registered'})
                res.render('signup',{
                    errors,
                    name,
                    email,
                    password,
                    mobile,
                    city,
                    state,
                    country
                });
            }
            else {
                // create User 
                const newUser = new User({
                    name,
                    email:loweremail,
                    password,
                    date,
                    gender,
                    mobile,
                    city,
                    state,
                    country
                });
                // Hashing Passwords
                bcrypt.genSalt(10,(err,salt)=>
                    bcrypt.hash(newUser.password,salt,(err,hash)=>{
                        if(err) throw err;
                        // Set password to hashed
                        newUser.password = hash;
                        // Save User in database
                        newUser.save()
                        .then(user =>{
                            req.flash('success_msg','You are now registered, Please login!!');
                            res.redirect('SignIn')
                        })
                        .catch(err=> console.log(err))
                }))
            }
        })

    }
}

// Signin 
 const signin = (req,res,next) =>{
    passport.authenticate('local',{
        // Authentication Passed 
        successRedirect:'/',
        // Authentication Failed
        failureRedirect:'SignIn',
        // Authentication Failed Message
        failureFlash:true
    })(req,res,next);
    req.flash('success_msg',`You are logged In !!`);
 };

// LogOut
const logout = (req,res)=>{
    req.logout();
    req.flash('success_msg','You are logged out');
    res.redirect('SignIn');
};



module.exports = {
    signin:signin,
    signup:signup,
    logout:logout,
}