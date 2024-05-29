// Left Side data 
let profile = document.getElementById("profile");
let appointment = document.getElementById("showappointment");
let medical = document.getElementById("medicalrecords");
let settings = document.getElementById("settings");
// Right side data (content variables )
let profile_content = document.getElementById('profile-content');
let appointment_content = document.getElementById('appointment-content');
let medical_content = document.getElementById('medical-content');
let setting_content = document.getElementById('setting-content');
// Profile Section
function showprofile() {
    profile.className = 'active';
    appointment.classList.remove('active');
    medical.classList.remove('active');
    settings.classList.remove('active');
    // Displaying Content
    profile_content.style.display = 'block';
    appointment_content.style.display = 'none';
    medical_content.style.display = "none";
    setting_content.style.display = "none";
}

// Appointment Section
function showappointment() {
    appointment.className = 'active';
    medical.classList.remove('active');
    settings.classList.remove('active');
    profile.classList.remove('active');
    // Displaying Content
    profile_content.style.display = 'none';
    medical_content.style.display = "none";
    setting_content.style.display = "none";
    appointment_content.style.display = 'block';

}

// Medical Records Section
function medicalrecords() {
    medical.className = ('active');
    settings.classList.remove('active');
    profile.classList.remove('active');
    appointment.classList.remove('active');
    // Displaying Content
    profile_content.style.display = "none";
    setting_content.style.display = "none";
    appointment_content.style.display = "none";
    medical_content.style.display = "block";
}

// Settings Section
function showsettings() {
    settings.className = ('active');
    medical.classList.remove('active');
    profile.classList.remove('active');
    appointment.classList.remove('active');
    // Displaying Content
    profile_content.style.display = "none";
    medical_content.style.display = "none";
    appointment_content.style.display = "none";
    setting_content.style.display = "block";
}