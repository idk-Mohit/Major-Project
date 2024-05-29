const User = require("../Databases/Mongo");
const passport = require("passport");


const appointment = (req,res) =>{
    const {doctorname} = req.body;
    let user = req.user;
   res.render('bookappointment',{
       doctorname,
       user
   }) 
}

const updateprofile = (req,res) =>{
    const {name,email,mobile,city,gender,state,date,country,bloodgroup} = req.body;
    let user = req.user; 
   console.log(name,email,mobile,city,gender,state,date,country,bloodgroup)
    try {
        User.updateOne({email:email},
            {
                name,
                mobile,
                gender,
                date,
                city,
                state,
                country,
                blood:bloodgroup
            })
            .then(result=>{
                if(result){
                    req.flash('success_msg','Profile Updated.');
                    res.redirect('Profile')
                }
                else {
                    req.flash('success_msg','Profile Not Updated');
                    res.redirect('Settings')
                }
            })
    } catch (error) {
        throw error
    }
}


const appointmentbooked = async (req,res) =>{
    const {appointment_date,Appointment_Status,doctorname,Experience,Hospital,Speciality} = req.body;
    let user = req.user
    try {
        await User.findOneAndUpdate({email:user.email},{$addToSet:{
                appointments:
                {
                    appointment_date:appointment_date,
                    appointment_status:Appointment_Status,
                    appointment_doctor:doctorname,
                    doctor:doctorname,
                    experience:Experience,
                    hospital:Hospital,
                    speciality:Speciality
                }
            }     
        })
        .then(result=>{
            if(result){
                req.flash('success_msg','Appointment Booked !!');
                res.redirect('/')
            }
        })
    } catch (error) {
        if(error) throw err;
    }
}

const cancel_appointment = (req,res) =>{
    const {appointment_id} = req.body;
    try {
        User.updateOne({"appointments._id":appointment_id},
        {
            $pull:{ "appointments":{'_id':appointment_id} }   
        })
        .then(result=>{
            if(result){
                req.flash('success_msg','Appointment Cancelled!!');
                res.redirect('User_Appointments')
            }
        })
        .catch(err=>{
        throw err;
    })
    } catch (error) {
        throw error
    }
}

const update_appointment = (req,res) => {
    const {update_appoint} = req.body;
    let user = req.user;
    res.render("update_appointment",{
        user,
        update_appoint
    })
}

const updated_appointment = (req,res) =>{
    const {appointment_date,appointment_id} = req.body;
    console.log(appointment_date);
    User.findOneAndUpdate({"appointments._id":appointment_id},
        {$set: 
            {
            "appointments.$.appointment_date":appointment_date
        }
    })
    .then(users =>{
        if(users) {
            req.flash('success_msg','Appointment rescheduled!!');
            res.redirect('User_Appointments') 
        }
        else{
            req.flash('success_msg','Some Error Occured!!');
            res.redirect('User_Appointments') 
        }
    })
    .catch(err => {
        throw err
    })
}

module.exports = {
    appointment:appointment,
    updateprofile:updateprofile,
    appointmentbooked:appointmentbooked,
    cancel_appointment:cancel_appointment,
    update_appointment:update_appointment,
    updated_appointment:updated_appointment
}