const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    blood:{
        type:String,
        required:false
    },
    appointments:[{
        appointment_date:String,
        appointment_status:String,
        appointment_doctor:String,
        doctor:String,
        experience:String,
        hospital:String,
        speciality:String
    }],        
})

const User = mongoose.model('User', UserSchema);

module.exports = User;