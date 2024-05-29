const { update } = require("../Databases/Mongo");

function signin(req,res) {
    res.render("signin")
}
function signup (req,res) {
    res.render("signup")
}
function home (req,res) {
    res.render("index",{
        user:req.user||'hello'
    });
}
function contact (req,res) {
    res.render("contactus",{
        user:req.user||'hello'
    })
}
// All Doctors Information--------------------------------------
function doctors (req,res) {
    res.render("doctors",{
        user:req.user||'hello'
    })
}

function dukesanson (req,res){
    res.render('doctors/dukesanson',{
        user:req.user||'hello'
    })
}
function bironiwhite (req,res){
    res.render('doctors/bironiwhite',{
        user:req.user||'hello'
    })
}
function charliemoon (req,res){
    res.render('doctors/charliemoon',{
        user:req.user||'hello'
    })
}
function conistar (req,res){
    res.render('doctors/conistar',{
        user:req.user||'hello'
    })
}
function erinnier (req,res){
    res.render('doctors/erinnier',{
        user:req.user||'hello'
    })
}
function georgia (req,res){
    res.render('doctors/georgiapeter',{
        user:req.user||'hello'
    })
}
function jonnyeve (req,res){
    res.render('doctors/jonnyeve',{
        user:req.user||'hello'
    })
}
function romeo (req,res){
    res.render('doctors/romeo',{
        user:req.user||'hello'
    })
}
function rosemoon (req,res){
    res.render('doctors/rosemoon',{
        user:req.user||'hello'
    })
}
function steveroc (req,res){
    res.render('doctors/steveroc',{
        user:req.user||'hello'
    })
}
function symphony (req,res){
    res.render('doctors/symphonylec',{
        user:req.user||'hello'
    })
}
function vrijuksent (req,res){
    res.render('doctors/vrijuksent',{
        user:req.user||'hello'
    })
}
function zaclisent (req,res){
    res.render('doctors/zaclisent',{
        user:req.user||'hello'
    })
}

//  All Hospitals ---------------------------------------------------
function hospitals (req,res) {
    res.render("hospitals",{
        user:req.user||'hello'
    })
}
function aiims (req,res) {
    res.render("hospitals/aiims",{
        user:req.user||'hello'
    })
}
function akash (req,res) {
    res.render("hospitals/akash",{
        user:req.user||'hello'
    })
}
function apollo (req,res) {
    res.render("hospitals/apollo",{
        user:req.user||'hello'
    })
}
function blksuper (req,res) {
    res.render("hospitals/blksuper",{
        user:req.user||'hello'
    })
}
function elbit (req,res) {
    res.render("hospitals/elbit",{
        user:req.user||'hello'
    })
}
function fortis (req,res) {
    res.render("hospitals/fortis",{
        user:req.user||'hello'
    })
}
function manipal (req,res) {
    res.render("hospitals/manipal",{
        user:req.user||'hello'
    })
}
function northstar (req,res) {
    res.render("hospitals/northstar",{
        user:req.user||'hello'
    })
}
function primussuper (req,res) {
    res.render("hospitals/primussuper",{
        user:req.user||'hello'
    })
}
function rockland (req,res) {
    res.render("hospitals/rockland",{
        user:req.user||'hello'
    })
}

// Treatment Page Rendering 
function dentistry (req,res) {
    res.render("treatments/dentistry",{
        user:req.user||'hello'
    })
}
function cancer (req,res) {
    res.render("treatments/cancer",{
        user:req.user||'hello'
    })
}
function orthopedic (req,res) {
    res.render("treatments/orthopedic",{
        user:req.user||'hello'
    })
}
function cardiology (req,res) {
    res.render("treatments/cardiology",{
        user:req.user||'hello'
    })
}
function heart (req,res) {
    res.render("treatments/heart",{
        user:req.user||'hello'
    })
}
function liver (req,res) {
    res.render("treatments/liver",{
        user:req.user||'hello'
    })
}
// 

// Tvastra Plus Page render
function tvastraplus (req,res) {
    res.render("tvastraplus",{
        user:req.user||'hello'
    })
}
function submitquery (req,res) {
    res.render("submitquery",{
        user:req.user||'hello'
    })
}
function faq (req,res) {
    res.render("FAQs",{
        user:req.user||'hello'
    })
}
function appointment (req,res) {
    res.render("bookappointment",{
        user:req.user||'hello'     
    })
}
function aboutus (req,res) {
    res.render("aboutus",{
        user:req.user||'hello'
    })
}
// Profile Section 
function profile (req,res) {
    res.render('profile',{
        user:req.user ||'hello'
    })
}
function setting (req,res) {
    res.render('user_settings',{
        user:req.user ||'hello'
    })
}
function user_appointment (req,res) {
    res.render('user_appointment',{
        user:req.user ||'hello'
    })
}
function update_appointment (req,res) {
    res.render('update_appointment',{
        user:req.user || 'hello'
    })
}

module.exports = {
    signin:signin,
    signup:signup,
    home:home,
    appointment:appointment,
    faq:faq,
    submitquery:submitquery,
    tvastraplus:tvastraplus,
    contact:contact,
    hospitals:hospitals,
    doctors:doctors,
    aboutus:aboutus,
    // Treatments  == 
    dentistry:dentistry,
    cancer:cancer,
    orthopedic:orthopedic,
    liver:liver,
    cardiology:cardiology,
    heart:heart,
    // DoctorsInformation == 
    dukesanson:dukesanson,
    vrijuksent:vrijuksent,
    bironiwhite:bironiwhite,
    charliemoon:charliemoon,
    conistar:conistar,
    erinnier:erinnier,
    georgia:georgia,
    jonnyeve:jonnyeve,
    romeo:romeo,
    rosemoon:rosemoon,
    steveroc:steveroc,
    symphony:symphony,
    zaclisent:zaclisent,
    // HospitalsInformation ==
    apollo:apollo,
    primussuper:primussuper,
    aiims:aiims,
    akash:akash,
    blksuper:blksuper,
    elbit:elbit,
    fortis:fortis,
    manipal:manipal,
    rockland:rockland,
    northstar:northstar,
    // Profile
    profile:profile,
    setting:setting,
    user_appointment:user_appointment,
    update_appointment:update_appointment,
}