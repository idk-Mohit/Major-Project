// Search suggestion from Homepage start here
var SearchSuggestion = [
	// Hospitals
	"hospitals",
	"apollo hospital",
	"aiims",
	"akash hospital",
	"bLK super",
	"elbit hospital",
	"fortis",
	"manipal",
	"north star",
	"primus super",
	"rockland",
	// Treatment
	"treatment",
	"cancer",
	"cardiology",
	"dentistry",
	"heart",
	"liver",
	"orthopedic",
	// Doctors
	"doctors",
	"bironi white",
	"charlie moon",
	"coni star",
	"duke sanson",
	"erin neir",
	"georgia peter",
	"jonny eve",
	"symphony lec",
	"steve roc",
	"vrijuk sent",
	"zacli sent",
	"romeo",
	"rose moon",
	"tvastra plus"
];
var x = 0;
var ul = document.getElementById("suggestion_ul");
function isSuggestionEmpty() {
	if (S_input.value === "") {
		ul.style.visibility = "hidden";
	}
}
function cleanSuggestion() {
	if (ul.childElementCount > 0) {
		ul.innerHTML = '';
		ul.style.visibility = "hidden";
	}
}
function autocomplete() {
	if (S_input.value.length > 0) {
		S_input.value = document.querySelectorAll("li")[0].innerHTML;
		searchValueByButton();
	}
}
function printAll() {
	cleanSuggestion();
	if (S_input.value.length === 0) {
		x = S_input.value.length + 1;
	}
	for (var i = 0; i < SearchSuggestion.length; i++) {
		if (x > 0 && SearchSuggestion[i].startsWith(S_input.value.toLowerCase())) {
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(SearchSuggestion[i]));
			ul.appendChild(li);
			li.onclick = autocomplete;
			ul.style.visibility = "visible";
		}
	}
}
// Search suggestion from Homepage ends here 

// Search js from Homepage start here
var Doctor = ["bironi white",
	"charlie moon",
	"coni star",
	"duke sanson",
	"erin neir",
	"georgia peter",
	"jonny eve",
	"symphony lec",
	"steve roc",
	"vrijuk sent",
	"zacli sent",
	"romeo",
	"rose moon",];
var Treatment = ["cancer", "cardiology", "dentistry", "heart", "liver", "orthopedic",];
var Hospital = ["apollo hospital", "aiims", "akash hospital", "blk super", "elbit hospital", "fortis", "manipal", "north star", "primus super", "rockland",];
var Others = ["tvastra plus", "doctors", "hospitals", "treatment"];
var S_input = document.getElementById("user_search_input");
var S_button = document.getElementById("user_search_button");
function makeInputInLowerCase() {
	S_input.value = S_input.value.toLowerCase();
}
function searchValue() {
	makeInputInLowerCase();
	switch (S_input.value) {
		case Doctor[0]:
			window.location.href = 'Bironi_White';
			break;
		case Doctor[1]:
			window.location.href = 'Charlie_Moon';
			break;
		case Doctor[2]:
			window.location.href = 'Coni_Star';
			break;
		case Doctor[3]:
			window.location.href = 'Duke_Sanson';
			break;
		case Doctor[4]:
			window.location.href = 'Erin_Neir';
			break;
		case Doctor[5]:
			window.location.href = 'Georgia_Peter';
			break;
		case Doctor[6]:
			window.location.href = 'Jonny_Eve';
			break;
		case Doctor[7]:
			window.location.href = 'Symphony_Lec';
			break;
		case Doctor[8]:
			window.location.href = 'Steve_Roc';
			break;
		case Doctor[9]:
			window.location.href = 'Vrijuk_Sent';
			break;
		case Doctor[10]:
			window.location.href = 'Zacli_Sent';
			break;
		case Doctor[11]:
			window.location.href = 'Romeo';
			break;
		case Doctor[12]:
			window.location.href = 'Rose_Moon';
			break;
		case Treatment[0]:
			window.location.href = 'Cancer';
			break;
		case Treatment[1]:
			window.location.href = 'Cardiology';
			break;
		case Treatment[2]:
			window.location.href = 'Dentistry';
			break;
		case Treatment[3]:
			window.location.href = 'Heart';
			break;
		case Treatment[4]:
			window.location.href = 'Liver';
			break;
		case Treatment[5]:
			window.location.href = 'Orhtopedic';
			break;
		case Hospital[0]:
			window.location.href = 'Apollo_Hospital';
			break;
		case Hospital[1]:
			window.location.href = 'AIIMS';
			break;
		case Hospital[2]:
			window.location.href = 'Akash_Hospital';
			break;
		case Hospital[3]:
			window.location.href = 'BLK_Super_Hospital';
			break;
		case Hospital[4]:
			window.location.href = 'Elbit_Hospital';
			break;
		case Hospital[5]:
			window.location.href = 'Fortis_Hospital';
			break;
		case Hospital[6]:
			window.location.href = 'Manipal_Hospital';
			break;
		case Hospital[7]:
			window.location.href = 'Rockland_Hospital';
			break;
		case Hospital[8]:
			window.location.href = 'Northstar_Hospital';
			break;
		case Hospital[9]:
			window.location.href = 'Primus_Super_Hospital';
			break;
		case Others[0]:
			window.location.href = 'Tvastra_Plus';
			break;
		case Others[1]:
			window.location.href = 'Doctors';
			break;
		case Others[2]:
			window.location.href = 'Hospitals';
			break;
		case Others[3]:
			window.location.href = 'Dentistry';
			break;
		default:
			alert("Not found");
			break;
	}
}
function searchValueByEnter(event) {
	printAll();
	isSuggestionEmpty();
	if (S_input.value.length > 0 && event.keyCode === 13) {
		searchValue();
		S_input.value = "";
	}
}
function searchValueByButton() {
	if (S_input.value.length > 0) {
		searchValue();
		S_input.value = "";
	}
}
S_input.addEventListener("keypress", searchValueByEnter);
S_button.addEventListener("click", searchValueByButton);
function hideIt() {
	ul.style.visibility = "hidden";
}
var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");
sec1.addEventListener("click", hideIt);
sec2.addEventListener("click", hideIt);
// Search js from Homepage ends here 

// How it works js from Homepage start here 
var option1 = document.getElementById("one");
var option2 = document.getElementById("two");
var option3 = document.getElementById("three");
var option4 = document.getElementById("four");
var option5 = document.getElementById("five");
var option6 = document.getElementById("six");
var option7 = document.getElementById("seven");
function active1() { x = 1; clean(); imageMover(); revaluex(); }
function active2() { x = 2; clean(); imageMover(); revaluex(); }
function active3() { x = 3; clean(); imageMover(); revaluex(); }
function active4() { x = 4; clean(); imageMover(); revaluex(); }
function active5() { x = 5; clean(); imageMover(); revaluex(); }
function active6() { x = 6; clean(); imageMover(); revaluex(); }
function active7() { x = 7; clean(); imageMover(); revaluex(); }
var c;
var j = [option1, option2, option3, option4, option5, option6, option7];
function SpanColouring() {
	for (var i = 0; i <= 6; i++) {
		c = j[i];
		c.style.border = "1px solid #cccccc";
		c.style.color = "#cccccc";
		c.getElementsByTagName("span")[0].style.color = "#cccccc";
	}
}
var x;
function revaluex() {
	SpanColouring();
	switch (x) {
		case 1:
			document.getElementById("sideimage_HIW_desk-tab").src = "../images/Fix_consultation.png";
			document.getElementById("sideimage_HIW_mob").src = "../images/Fix_consultation.png";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Fix Consultation";
			document.getElementById("sideimage_h3_mob").innerHTML = "Fix Consultation";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "This depicts that user will have to fix appointment first when it selects a particular doctor";
			document.getElementById("sideimage_p_mob").innerHTML = "This depicts that user will have to fix appointment first when it selects a particular doctor";
			option1.style.border = "2px solid #0173b2";
			option1.style.color = "#021433";
			option1.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		case 2:
			document.getElementById("sideimage_HIW_desk-tab").src = "../images/upload_reports.png";
			document.getElementById("sideimage_HIW_mob").src = "../images/upload_reports.png";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Upload Medical Reports";
			document.getElementById("sideimage_h3_mob").innerHTML = "Upload Medical Reports";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "This depicts that user will have to upload there medical report's";
			document.getElementById("sideimage_p_mob").innerHTML = "This depicts that user will have to upload there medical report's";
			option2.style.border = "2px solid #0173b2";
			option2.style.color = "#021433";
			option2.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		case 3:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg?t=st=1655273150~exp=1655273750~hmac=f416b22fb48e46d6dcccad299d24cb195bba5a92341eacac93564094e9cd1c0d&w=740";
			document.getElementById("sideimage_HIW_mob").src = "https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg?t=st=1655273150~exp=1655273750~hmac=f416b22fb48e46d6dcccad299d24cb195bba5a92341eacac93564094e9cd1c0d&w=740";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Consult with doctor";
			document.getElementById("sideimage_h3_mob").innerHTML = "Consult with doctor";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After uploading the medical reports user can directly consult with doctor.";
			document.getElementById("sideimage_p_mob").innerHTML = "After uploading the medical reports user can directly consult with doctor.";
			option3.style.border = "2px solid #0173b2";
			option3.style.color = "#021433";
			option3.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		case 4:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://img.freepik.com/free-vector/surgeons-team-surrounding-patient-operation-table-flat-vector-illustration-cartoon-medical-workers-preparing-surgery-medicine-technology-concept_74855-8596.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617235200";
			document.getElementById("sideimage_HIW_mob").src = "https://img.freepik.com/free-vector/surgeons-team-surrounding-patient-operation-table-flat-vector-illustration-cartoon-medical-workers-preparing-surgery-medicine-technology-concept_74855-8596.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1617235200";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Fix surgery";
			document.getElementById("sideimage_h3_mob").innerHTML = "Fix surgery";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After Consultation user can check the details for surgery and can fix thier surgery.";
			document.getElementById("sideimage_p_mob").innerHTML = "After Consultation user can check the details for surgery and can fix thier surgery.";
			option4.style.border = "2px solid #0173b2";
			option4.style.color = "#021433";
			option4.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		case 5:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://www.bajajallianz.com/content/dam/bagic/ab-health-insurance/why-health-ins.png";
			document.getElementById("sideimage_HIW_mob").src = "https://www.bajajallianz.com/content/dam/bagic/ab-health-insurance/why-health-ins.png";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Hospital sent estimates";
			document.getElementById("sideimage_h3_mob").innerHTML = "Hospital sent estimates";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After fixing the surgery Hospital will calculate an estimate of all expenses and duties";
			document.getElementById("sideimage_p_mob").innerHTML = "After fixing the surgery Hospital will calculate an estimate of all expenses and duties";
			option5.style.border = "2px solid #0173b2";
			option5.style.color = "#021433";
			option5.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		case 6:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://img.freepik.com/free-vector/hospital-medical-billing-services-illustration_2175-4532.jpg?w=740";
			document.getElementById("sideimage_HIW_mob").src = "https://img.freepik.com/free-vector/hospital-medical-billing-services-illustration_2175-4532.jpg?w=740";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Payment";
			document.getElementById("sideimage_h3_mob").innerHTML = "Payment";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "User can make Payment in many ways directly to Hospital,doctor etc.";
			document.getElementById("sideimage_p_mob").innerHTML = "User can make Payment in many ways directly to Hospital,doctor etc.";
			option6.style.border = "2px solid #0173b2";
			option6.style.color = "#021433";
			option6.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		case 7:
			document.getElementById("sideimage_HIW_desk-tab").src = "https://img.freepik.com/free-vector/woman-resting-hospital-bed-with-dropper-intensive-therapy_284092-582.jpg?size=626&ext=jpg";
			document.getElementById("sideimage_HIW_mob").src = "https://img.freepik.com/free-vector/woman-resting-hospital-bed-with-dropper-intensive-therapy_284092-582.jpg?size=626&ext=jpg";
			document.getElementById("sideimage_h2_desk-tab").innerHTML = "Surgery Completed";
			document.getElementById("sideimage_h3_mob").innerHTML = "Surgery Completed";
			document.getElementById("sideimage_p_desk-tab").innerHTML = "After the Payment surgery and treatment will be get done on given day.";
			document.getElementById("sideimage_p_mob").innerHTML = "After the Payment surgery and treatment will be get done on given day.";
			option7.style.border = "2px solid #0173b2";
			option7.style.color = "#021433";
			option7.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
		default:
			document.getElementById("sideimage_HIW_desk-tab").src = "../images/Fix_consultation.png";
			document.getElementById("sideimage_HIW_mob").src = "../images/Fix_consultation.png";
			option1.style.border = "2px solid #0173b2";
			option1.style.color = "#021433";
			option1.getElementsByTagName("span")[0].style.color = "#0173b2";
			break;
	}
}
revaluex();
// // How it works js from Homepage ends here 
let ms1 = document.getElementById("mob-image-sec1");
let ms2 = document.getElementById("mob-image-sec2");
let ms3 = document.getElementById("mob-image-sec3");
let ms4 = document.getElementById("mob-image-sec4");
let ms5 = document.getElementById("mob-image-sec5");
let ms6 = document.getElementById("mob-image-sec6");
let ms7 = document.getElementById("mob-image-sec7");
let imageHtml = `<div class="tab-mob-image">
                  <img id="sideimage_HIW_mob" src="https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/img1.png" alt="">
                  <h3 id="sideimage_h3_mob">Fix Consultation</h3>
                  <p id="sideimage_p_mob">This depicts that user will have to fix appointment
                      first when it selects a particular doctor</p>
      	        </div>`;
let ms = [ms1, ms2, ms3, ms4, ms5, ms6, ms7];
function clean() {
	var c = ``;
	for (var i = 0; i < 7; i++) {
		c = ms[i];
		c.innerHTML = ``;
	}
}
function imageMover() {
	switch (x) {
		case 1:
			ms1.innerHTML = imageHtml;
			break;
		case 2:
			ms2.innerHTML = imageHtml;
			break;
		case 3:
			ms3.innerHTML = imageHtml;
			break;
		case 4:
			ms4.innerHTML = imageHtml;
			break;
		case 5:
			ms5.innerHTML = imageHtml;
			break;
		case 6:
			ms6.innerHTML = imageHtml;
			break;
		case 7:
			ms7.innerHTML = imageHtml;
			break;
	}
}