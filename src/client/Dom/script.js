var coll = document.getElementsByClassName("dropdown-1");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const showpass = () => {
  let eye = document.getElementById('password-eye').classList;
  let pass = document.getElementById('password');
  if (eye.value.includes('fa-eye-slash')) {
    eye.remove('fa-eye-slash');
    eye.add('fa-eye');
    pass.type = 'text';
  }
  else {
    eye.remove('fa-eye');
    eye.add('fa-eye-slash');
    pass.type = 'password';
  }
}


window.addEventListener('resize', function () {
  const viewport_width = window.innerWidth;
  let Image = document.getElementsByClassName('footer_Logo')
  viewport_width < 768 ? Image.src = '../../images/Tvastra_Dark.png' : Image.src = '../../images/Tvastra_Light.png'
});