let SearchFilterTags = [];
function Search() {
	addCheckedLocation();
	addCheckedTreatment();
	addCheckedDepartment();
	findMatchingHospital();
}
// filter function for location
let Location = document.getElementById("Location");
let locSearchButton = document.getElementById("hosLocSearchButton");
let locFilterRemover = document.getElementById("hosLocFilterRemover");
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
var trtSearchButton = document.getElementById("hosTrtSearchButton");
var trtFilterRemover = document.getElementById("hosTrtFilterRemover");
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

// filter function for department
var Department = document.getElementById("Department");
var depSearchButton = document.getElementById("hosDepSearchButton");
var depFilterRemover = document.getElementById("hosDepFilterRemover");
function addCheckedDepartment() {
	for(var i = 0; i < Department.length;i++) {
		if (Department[i].checked) {
			if(SearchFilterTags.includes(Department[i].value)) {
				// already present in list
			}
			else{
				SearchFilterTags.push(Department[i].value);
			}
		}
		else {
			if(SearchFilterTags.includes(Department[i].value)) {
				SearchFilterTags = SearchFilterTags.filter(e => e !== Department[i].value);
			}
		}
	}
}
function removeDepFilter() {
	for(var i = 0; i < Department.length;i++) {
		if (Department[i].checked) {
			SearchFilterTags = SearchFilterTags.filter(e => e !== Department[i].value);
			Department[i].checked = false;
		}
	}
}
depSearchButton.addEventListener("click", Search);
depFilterRemover.addEventListener("click", removeDepFilter);

// Matching doctors with filter list
let Hos1 = ["Department One","DLF Cyber City","Multi Organ Transplant","Orthopedics Surgery","Infertility Treatment","Dentistry"];
let Hos2 = ["Department Two","Lajpat Nagar","Multi Organ Transplant","Orthopedics Surgery","Infertility Treatment","Cancer"];
let Hos3 = ["Department Three","Palam Vihar","Multi Organ Transplant","Orthopedics Surgery","Cardiology","Cancer"];
let Hos4 = ["Department Four","Dwarka","Multi Organ Transplant","Dentistry","Cardiology","Cancer"];
let Hos5 = ["Department One","Punjabi Baag","Infertility Treatment","Dentistry","Cardiology","Cancer"];
let Hos6 = ["Department Three","DLF Cyber City","Orthopedics Surgery","Infertility Treatment","Cardiology","Cancer"];
let Hos7 = ["Department Two","New Delhi","Multi Organ Transplant","Infertility Treatment","Cardiology","Cancer"];
let Hos8 = ["Department Four","Dwarka","Multi Organ Transplant","Orthopedics Surgery","Dentistry","Cancer"];
let Hos9 = ["Department Three","Palam Vihar","Orthopedics Surgery","Infertility Treatment","Dentistry","Cardiology"];
let Hos10 = ["Department One","Punjabi Baag","Multi Organ Transplant","Orthopedics Surgery","Cardiology","Cancer"];
let HosList = document.getElementById("hos-list-sec");

// adding html
		// <!-- Hospital 1 -->
let Hos0inner =
		`<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Apollo Hospital</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>DLF Cyber City</h6>
                    <h6><i class='fas fa-bed'></i>133 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>orthopedics Surgery</span>
                        <span>infertility Treatment</span>
                        <span>Dentistry</span>
                        <span class="bg-lightgray">+10 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                    <a href="tel:123-456-7890"><button>Call Now</button></a>
                    <a href="Apollo_Hospital"><button>Read More</button></a>
                </div>
                <div class="hos0 image"></div>
            </div>`;
        // <!-- Hospital 2 -->
let Hos1inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Fortis</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Lajpat Nagar</h6>
                    <h6><i class='fas fa-bed'></i>145 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>orthopedics Surgery</span>
                        <span>infertility Treatment</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+20 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Fortis_Hospital"><button>Read More</button></a>
                </div>
                <div class="hos1 image"></div>
            </div>`;
        // <!-- Hospital 3 -->
let Hos2inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Rockland Hospital</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Palam Vihar</h6>
                    <h6><i class='fas fa-bed'></i>130 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>orthopedics Surgery</span>
                        <span>Cardiology</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+30 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Rockland_Hospital"><button>Read More</button></a>
            </div>
                <div class="hos2 image"></div>
            </div>`;
        // <!-- Hospital 4 -->
let Hos3inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Primus Super Speciality Hospital</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Dwarka</h6>
                    <h6><i class='fas fa-bed'></i>100 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>Dentistry</span>
                        <span>Cardiology</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+20 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Primus_Super_Hospital"><button>Read More</button></a>
            </div>
                <div class="hos3 image"></div>
            </div>`;
        // <!-- Hospital 5 -->
let Hos4inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Manipal North Side Hospital</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Punjabi Baag</h6>
                    <h6><i class='fas fa-bed'></i>123 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>infertility Treatment</span>
                        <span>Dentistry</span>
                        <span>Cardiology</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+30 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Manipal_Hospital"><button>Read More</button></a>
            </div>
                <div class="hos4 image"></div>
            </div>`;
        // <!-- Hospital 6 -->
let Hos5inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Northstar</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>DLF Cyber City</h6>
                    <h6><i class='fas fa-bed'></i>150 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>orthopedics Surgery</span>
                        <span>infertility Treatment</span>
                        <span>Cardiology</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+40 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Northstar_Hospital"><button>Read More</button></a>
            </div>
                <div class="hos5 image"></div>
            </div>`;
        // <!--Hospital 7 -->
let Hos6inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>AIIMS</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>New Delhi</h6>
                    <h6><i class='fas fa-bed'></i>156 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>infertility Treatment</span>
                        <span>Cardiology</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+30 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="AIIMS"><button>Read More</button></a>
            </div>
                <div class="hos6 image"></div>
            </div>`;
        // <!-- Hospital 8 -->
let Hos7inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Elbit Daignostics</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Dwarka</h6>
                    <h6><i class='fas fa-bed'></i>112 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>orthopedics Surgery</span>
                        <span>Dentistry</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+10 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Elbit_Hospital"><button>Read More</button></a>
            </div>
                <div class="hos7 image"></div>
            </div>`;
        // <!-- Hospital 9 -->
let Hos8inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>Akash hospital</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Palam Vihar</h6>
                    <h6><i class='fas fa-bed'></i>133 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>orthopedics Surgery</span>
                        <span>infertility Treatment</span>
                        <span>Dentistry</span>
                        <span>Cardiology</span>
                        <span class="bg-lightgray">+20 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                <a href="tel:123-456-7890"><button>Call Now</button></a>
                <a href="Akash_Hospital"><button>Read More</button></a>
            </div>
                <div class="hos8 image"></div>
            </div>`;
        // <!-- Hospital 10 -->
let Hos9inner =
        `<div class="section-2-hos-div">
                <div class="hos-info">
                    <hr class="hos-name-bar">
                    <h3>BLK Super Speciality Hospital</h3>
                    <h6><i class='fas fa-map-marker-alt'></i>Punjabi Baag</h6>
                    <h6><i class='fas fa-bed'></i>103 Beds</h6>
                    <div class="hos-info-inner">
                        <h6><i class="fas fa-stethoscope"></i>Famous Treatments</h6>
                        <div>
                        <span>Multi Organ Transplant</span>
                        <span>orthopedics Surgery</span>
                        <span>Cardiology</span>
                        <span>Cancer</span>
                        <span class="bg-lightgray">+10 more</span>
                        </div>
                    </div>
                </div>
                <div class="hos-info-button">
                    <a href="tel:123-456-7890"><button>Call Now</button></a>
                    <a href="BLK_Super_Hospital"><button>Read More</button></a>
                </div>
                <div class="hos9 image"></div>
            </div>`;
let HosTags = [Hos1,Hos2,Hos3,Hos4,Hos5,Hos6,Hos7,Hos8,Hos9,Hos10];
let Hos = [Hos0inner,Hos1inner,Hos2inner,Hos3inner,Hos4inner,Hos5inner,Hos6inner,Hos7inner,Hos8inner,Hos9inner];
let HosInner = "";
function findMatchingHospital() {
    if(SearchFilterTags.length > 0){
        HosList.innerHTML = " ";
        HosInner = " ";
        for(var i = 0; i < HosTags.length;i++) {
            for(var j = 0; j < 4;j++) {
                if(HosTags[i].includes(SearchFilterTags[j])) {
                    HosInner += Hos[i];
                    j = 4;
                }
            }   
        }
        HosList.innerHTML = HosInner;
    }
    else {
        if(HosList.innerHTML = " "){
            HosInner = " ";
            for(var i = 0; i < Hos.length;i++) {
                HosInner += Hos[i];
            }
            HosList.innerHTML = HosInner;
        }
    }
}