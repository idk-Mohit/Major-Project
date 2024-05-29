let SearchFilterTags = [];
function Search() {
	addCheckedLocation();
	addCheckedTreatment();
	addCheckedHospital();
	addCheckedExperience();
	findMatchingDoctor();
}
// filter function for location
var Location = document.getElementById("Location");
var locSearchButton = document.getElementById("locSearchButton");
var locFilterRemover = document.getElementById("locFilterRemover");
function addCheckedLocation() {
	for(var i = 0; i < Location.length;i++) {
		if (Location[i].checked) {
			if(SearchFilterTags.includes(Location[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Location[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Location[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Location[i].value);
			}
		}
	}
}
function removeLocFilter() {
	for(var i = 0; i < Location.length;i++) {
		if (Location[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Location[i].value);
			Location[i].checked = false;
		}
	}
}
locSearchButton.addEventListener("click", Search);
locFilterRemover.addEventListener("click", removeLocFilter);

// filter function for treatment
var Treatment = document.getElementById("Treatment");
var trtSearchButton = document.getElementById("trtSearchButton");
var trtFilterRemover = document.getElementById("trtFilterRemover");
function addCheckedTreatment() {
	for(var i = 0; i < Treatment.length;i++) {
		if (Treatment[i].checked) {
			if(SearchFilterTags.includes(Treatment[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Treatment[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Treatment[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Treatment[i].value);
			}
		}
	}
}
function removeTrtFilter() {
	for(var i = 0; i < Treatment.length;i++) {
		if (Treatment[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Treatment[i].value);
			Treatment[i].checked = false;
		}
	}
}
trtSearchButton.addEventListener("click", Search);
trtFilterRemover.addEventListener("click", removeTrtFilter);

// filter function for hospital
var Hospital = document.getElementById("Hospital");
var hspSearchButton = document.getElementById("hspSearchButton");
var hspFilterRemover = document.getElementById("hspFilterRemover");
function addCheckedHospital() {
	for(var i = 0; i < Hospital.length;i++) {
		if (Hospital[i].checked) {
			if(SearchFilterTags.includes(Hospital[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Hospital[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Hospital[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Hospital[i].value);
			}
		}
	}
}
function removeHspFilter() {
	for(var i = 0; i < Hospital.length;i++) {
		if (Hospital[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Hospital[i].value);
			Hospital[i].checked = false;
		}
	}
}
hspSearchButton.addEventListener("click", Search);
hspFilterRemover.addEventListener("click", removeHspFilter);

// filter function for experience
var Experience = document.getElementById("experience");
var expSearchButton = document.getElementById("expSearchButton");
var expFilterRemover = document.getElementById("expFilterRemover");
function addCheckedExperience() {
	for(var i = 0; i < Experience.length;i++) {
		if (Experience[i].checked) {
			if(SearchFilterTags.includes(Experience[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Experience[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Experience[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Experience[i].value);
			}
		}
	}
}
function removeExpFilter() {
	for(var i = 0; i < Experience.length;i++) {
		if (Experience[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Experience[i].value);
			Experience[i].checked = false;
		}
	}
}
expSearchButton.addEventListener("click", Search);
expFilterRemover.addEventListener("click", removeExpFilter);

// Matching doctors with filter list
let Doc1 = ["Cancer","Northstar","DLF Cyber City","5+"];
let Doc2 = ["Cancer","AIIMS","5+","Dwarka"];
let Doc3 = ["Cardiology","Fortis","5+","Lajpat Nagar"];
let Doc4 = ["Cardiology","Elbit Daignostics","10+","Palam Vihar"];
let Doc5 = ["Dentistry","Manipal North Side Hospital","15+","Punjabi Baag"];
let Doc6 = ["Dentistry","Apollo Hospital","10+","DLF Cyber City"];
let Doc7 = ["Infertility Treatment","Northstar","15+","Dwarka"];
let Doc8 = ["Infertility Treatment","AIIMS","25+","Lajpat Nagar"];
let Doc9 = ["Orthopedics Surgery","Fortis Hospital","20+","Palam Vihar"];
let Doc10 = ["Orthopedics Surgery","Elbit Daignostics","20+","Punjabi Baag"];
let Doc11 = ["Multi Organ Transplant","Manipal North Side Hospital","25+","Palam Vihar"];
let Doc12 = ["Multi Organ Transplant","Apollo Hospital","30+","Dwarka"];
let Doc13 = ["Multi Organ Transplant","AIIMS","30+","DLF Cyber City"];
let DocList = document.getElementById("doc-list-sec");

// adding html
		// <!-- doctor 1 -->
let Doc0inner =
		`<div id="doctor1" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Duke Sanson</h3>
            <div><i class="fa fa-user-md"></i><h6>Cancer</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Northstar</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>DLF Cyber City</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>8 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Duke Sanson">Book Appointment</button>
            </form>
            <a href="Duke_Sanson"><button>Read More</button></a>
        </div>
        <div class="doc0 image" style=" background-image: url(https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/image--002.jpg);"></div>
    </div>`;
        // <!-- doctor 2 -->
let Doc1inner =
        `<div id="doctor2" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Rose Moon</h3>
            <div><i class="fa fa-user-md"></i><h6>Cancer</h6></div>
            <div><i class='far fa-hospital'></i> <h6>AIIMS</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Dwarka</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>5 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Rose Moon">Book Appointment</button>
            </form>
            <a href="Rose_Moon"><button>Read More</button></a>
        </div>
        <div class="doc1 image" style=" background-image: url(https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/image--003.jpg);"></div>
    </div>`;
        // <!-- doctor 3 -->
let Doc2inner =
        `<div id="doctor3" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Coni Star</h3>
            <div><i class="fa fa-user-md"></i><h6>Cardiology</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Fortis Hospital</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Lajpat Nagar</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>5 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Coni Star">Book Appointment</button>
            </form>
            <a href="Coni_Star"><button>Read More</button></a>
        </div>
        <div class="doc2 image" style="background-image: url(https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/image--004.jpg);"></div>
    </div>`;
        // <!-- doctor 4 -->
let Doc3inner =
        `<div id="doctor4" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Georgia Peter</h3>
            <div><i class="fa fa-user-md"></i><h6>Cardiology</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Elbit Daignostics</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Palam Vihar</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>10 Years of Experience</h6></div> 
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Georgia Peter">Book Appointment</button>
            </form>
            <a href="Georgia_Peter"><button>Read More</button></a>
        </div>
        <div class="doc3 image" style="background-image: url(https://s3.ap-south-1.amazonaws.com/appdev.konfinity.com/css/tasks/image--005.jpg);"></div>
    </div>`;
        // <!-- doctor 5 -->
let Doc4inner =
        `<div id="doctor5" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Jonny Eve</h3>
            <div><i class="fa fa-user-md"></i><h6>Dentistry</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Manipal North Side Hospital</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Punjabi Baag</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>15 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Jonny Eve">Book Appointment</button>
            </form>
            <a href="Jonny_Eve"><button>Read More</button></a>
        </div>
        <div class="doc4 image" style="background-image: url(https://cerebralpalsynewstoday.com/wp-content/uploads/2017/06/shutterstock_52856165-921x480@2x.jpg);"></div>
    </div>`;
        // <!-- doctor 6 -->
let Doc5inner =
        ` <div id="doctor6" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Charlie Moon</h3>
            <div><i class="fa fa-user-md"></i><h6>Dentistry</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Apollo Hospitals, Delhi</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>DLF Cyber City</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>10 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Charlie Moon">Book Appointment</button>
            </form>
            <a href="Charlie_Moon"><button>Read More</button></a>
        </div>  
        <div class="doc5 image" style="background-image: url(https://www.cdc.gov/diabetes/images/library/spotlights/Male-doctor-smiling-portrait-close-up-Med-Res-72991363.jpg);"></div>
    </div>`;
        // <!-- doctor 7 -->
let Doc6inner =
        `<div id="doctor7" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Erin Nier</h3>
            <div><i class="fa fa-user-md"></i><h6>Infertility Treatment</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Northstar</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Dwarka</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>15 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Erin Nier">Book Appointment</button>
            </form>
            <a href="Erin_Neir"><button>Read More</button></a>
        </div>
        <div class="doc6 image" style="background-image: url(https://post.medicalnewstoday.com/wp-content/uploads/2019/01/Male_Doctor_732x549-thumbnail.jpg);"></div>
    </div>`;
        // <!-- doctor 8 -->
let Doc7inner =
        ` <div id="doctor8" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Romeo</h3>
            <div><i class="fa fa-user-md"></i><h6>Infertility Treatment</h6></div>
            <div><i class='far fa-hospital'></i> <h6>AIIMS</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Lajpat Nagar</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>25 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Romeo">Book Appointment</button>
            </form>
            <a href="Romeo"><button>Read More</button></a>
        </div>
        <div class="doc7 image" style="background-image: url(https://otwartegrupy.pl/img/lekarz_bestdoctors.jpg);"></div>
    </div> `;
        // <!-- doctor 9 -->
let Doc8inner =
        ` <div id="doctor9" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Steve Roc</h3>
            <div><i class="fa fa-user-md"></i><h6>Orthopedics Surgery</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Fortis Hospital</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Palam Vihar</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>20 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Steve Roc">Book Appointment</button>
            </form>
            <a href="Steve_Roc"><button>Read More</button></a>
        </div> 
        <div class="doc8 image" style="background-image: url(https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop);"></div>
    </div>`;
        // <!-- doctor 10 -->
let Doc9inner =
        `<div id="doctor10" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Zacli sent</h3>
            <div><i class="fa fa-user-md"></i><h6>Orthopedics Surgery</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Elbit Daignostics</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Punjabi Baag</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>20 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Zacli sent">Book Appointment</button>
            </form>
            <a href="Zacli_Sent"><button>Read More</button></a>
        </div>
        <div class="doc9 image" style="background-image: url(https://telemedizin.one/wp-content/uploads/2019/12/doctor07.jpg.pagespeed.ce.vrs67renwa.jpg);"></div>
    </div>`;
        // <!-- doctor 11 -->
let Doc10inner =
        `<div id="doctor11" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Bironi White</h3>
            <div><i class="fa fa-user-md"></i><h6>Multi Organ Transplant</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Manipal North Side Hospital</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Palam Vihar</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>25 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Bironi White">Book Appointment</button>
            </form>
            <a href="Bironi_White"><button>Read More</button></a>
        </div>
        <div class="doc10 image" style="background-image: url(https://www.cdc.gov/drugoverdose/training/modules/module1/images/welcomeimage.png);"></div>
    </div>`;
        // <!-- doctor 12 -->
let Doc11inner =
        `<div id="doctor12" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Vrijuk sent</h3>
            <div><i class="fa fa-user-md"></i><h6>Multi Organ Transplant</h6></div>
            <div><i class='far fa-hospital'></i> <h6>Apollo Hospitals, Delhi</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>Dwarka</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>30 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Vrijuk Sent">Book Appointment</button>
            </form>
            <a href="Vrijuk_Sent"><button>Read More</button></a>
        </div>
        <div class="doc11 image" style="background-image: url(https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg);"></div>
    </div>`;
        // <!-- doctor 13 -->
let Doc12inner =        
        `  <div id="doctor13" class="section-2-doc-div">
        <div class="doc-info">
            <hr class="doc-name-bar">
            <h3>Sympony lec</h3>
            <div><i class="fa fa-user-md"></i><h6>Multi Organ Transplant</h6></div>
            <div><i class='far fa-hospital'></i> <h6>AIIMS</h6></div>
            <div><i class='fas fa-award'></i>  <h6>MBBS, MD, FRCP, Fellowship</h6></div>
            <div><i class='fas fa-map-marker-alt'></i>  <h6>DLF Cyber City</h6></div>
            <div><i class='fas fa-clock'></i>  <h6>30 Years of Experience</h6></div>
        </div>
        <div class="doc-info-button">
            <form action="Book_Appointment" method="POST">
                <button type="submit" name="doctorname" value="Symphony lec">Book Appointment</button>
            </form>
            <a href="Symphony_Lec"><button>Read More</button></a>
        </div>
        <div class="doc12 image" style="background-image: url(https://webcomicms.net/sites/default/files/clipart/174399/picture-doctor-174399-2506358.jpg);"></div>
    </div> `;
let DocTags = [Doc1,Doc2,Doc3,Doc4,Doc5,Doc6,Doc7,Doc8,Doc9,Doc10,Doc11,Doc12,Doc13];
let Doc = [Doc0inner,Doc1inner,Doc2inner,Doc3inner,Doc4inner,Doc5inner,Doc6inner,Doc7inner,Doc8inner,Doc9inner,Doc10inner,Doc11inner,Doc12inner];
let DocInner = "";
function findMatchingDoctor() {
    if(SearchFilterTags.length > 0){
        DocList.innerHTML = " ";
        DocInner = " ";
        for(var i = 0; i < DocTags.length;i++) {
            for(var j = 0; j < 4;j++) {
                if(DocTags[i].includes(SearchFilterTags[j])) {
                    DocInner += Doc[i];
                    j = 4;
                }
            }   
        }
        DocList.innerHTML = DocInner;
    }
    else {
        if(DocList.innerHTML = " "){
            DocInner = " ";
            for(var i = 0; i < Doc.length;i++) {
                DocInner += Doc[i];
            }
            DocList.innerHTML = DocInner;
        }
    }
}