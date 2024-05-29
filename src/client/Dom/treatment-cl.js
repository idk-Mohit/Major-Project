$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

var a = document.getElementsByClassName("owl-prev");
a[0].innerHTML = `<i class="fas fa-chevron-circle-left fa-2x"></i>`;
var b = document.getElementsByClassName("owl-next");
b[0].innerHTML = `<i class="fas fa-chevron-circle-right fa-2x"></i>`;
var c = document.getElementsByClassName("owl-nav");
c[0].style.textAlign = "right";
c[0].style.marginBottom = "2rem";