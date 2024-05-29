const express = require("express")
const maincontroller = require("../Controllers/MainController");
const LoginController = require("../Controllers/LoginController");
const Appointment = require("../Controllers/appointment");
const ensureAuth = require('../config/auth');
const router = express.Router();

// get routes
router.route("/").get(maincontroller.home);
router.route("/Home").get(maincontroller.home)
router.route("/SignUp").get(maincontroller.signup);
router.route("/SignIn").get(maincontroller.signin);
router.route("/Doctors").get(maincontroller.doctors);
router.route("/Hospitals").get(maincontroller.hospitals);
router.route("/Tvastra_Plus").get(maincontroller.tvastraplus);
router.route("/Contact_Us").get(maincontroller.contact);
router.route("/About_Us").get(maincontroller.aboutus);
router.route("/Book_Appointment").get(ensureAuth.ensureAuth,maincontroller.appointment);
router.route("/Submit_Query").get(maincontroller.submitquery);
router.route("/FAQs").get(maincontroller.faq);
router.route("/logout").get(LoginController.logout);

// Profile Section
router.route("/Profile").get(ensureAuth.ensureAuth,maincontroller.profile);
router.route("/Settings").get(ensureAuth.ensureAuth,ensureAuth.ensureAuth,maincontroller.setting);
router.route("/User_Appointments").get(ensureAuth.ensureAuth,maincontroller.user_appointment);
router.route("/Update_Appointment").get(ensureAuth.ensureAuth,maincontroller.update_appointment);

// Treatment Pages
router.route("/Dentistry").get(maincontroller.dentistry);
router.route("/Cancer").get(maincontroller.cancer);
router.route("/Liver").get(maincontroller.liver);
router.route("/Cardiology").get(maincontroller.cardiology);
router.route("/Heart").get(maincontroller.heart);
router.route("/Orthopedic").get(maincontroller.orthopedic);
router.route("/Treatment").get(maincontroller.dentistry)
// Doctors Information 
router.route('/Duke_Sanson').get(maincontroller.dukesanson);
router.route('/Vrijuk_Sent').get(maincontroller.vrijuksent);
router.route('/Bironi_White').get(maincontroller.bironiwhite);
router.route('/Coni_Star').get(maincontroller.conistar);
router.route('/Erin_Neir').get(maincontroller.erinnier);
router.route('/Georgia_Peter').get(maincontroller.georgia);
router.route('/Jonny_Eve').get(maincontroller.jonnyeve);
router.route('/Romeo').get(maincontroller.romeo);
router.route('/Rose_Moon').get(maincontroller.rosemoon);
router.route('/Steve_Roc').get(maincontroller.steveroc);
router.route('/Symphony_Lec').get(maincontroller.symphony);
router.route('/Zacli_Sent').get(maincontroller.zaclisent);
router.route('/Charlie_Moon').get(maincontroller.charliemoon);
// Hospitals Information 
router.route('/Apollo_Hospital').get(maincontroller.apollo)
router.route('/AIIMS').get(maincontroller.aiims)
router.route('/Akash_Hospital').get(maincontroller.akash)
router.route('/BLK_Super_Hospital').get(maincontroller.blksuper)
router.route('/Elbit_Hospital').get(maincontroller.elbit)
router.route('/Fortis_Hospital').get(maincontroller.fortis)
router.route('/Manipal_Hospital').get(maincontroller.manipal)
router.route('/Rockland_Hospital').get(maincontroller.rockland)
router.route('/Northstar_Hospital').get(maincontroller.northstar)
router.route('/Primus_Super_Hospital').get(maincontroller.primussuper)

// post routes
router.route("/SignIn").post(LoginController.signin);
router.route("/SignUp").post(LoginController.signup);
router.route("/Book_Appointment").post(ensureAuth.ensureAuth,Appointment.appointment)
router.route("/Booked_Appointment").post(ensureAuth.ensureAuth,Appointment.appointmentbooked)
router.route("/Update_Profile").post(ensureAuth.ensureAuth,Appointment.updateprofile)
router.route("/cancel_appointment").post(ensureAuth.ensureAuth,Appointment.cancel_appointment)
router.route("/Update_Appointment").post(ensureAuth.ensureAuth,Appointment.update_appointment)
router.route("/Updated_Appointment").post(ensureAuth.ensureAuth,Appointment.updated_appointment)

module.exports = router;