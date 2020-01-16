function clickFreccia() {
    $('html, body').animate({
        scrollTop: $("#menu").offset().top

    }, 2000);
}


function vaiA(elemento) {
    if (elemento == null || typeof elemento == "undefined") {
        $('html, body').animate({

            scrollTop: $("#main").offset().top

        }, 1000);
    }
    console.log(elemento.id)
    $('html, body').animate({

        scrollTop: $("#" + elemento.id + "Div").offset().top

    }, 1000);
}

function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function gestisciScroll() {
    let a = document.body.scrollTop;
    let b = document.body.scrollHeight - document.body.clientHeight;
    let c = a / b;

    c = map(c, 0, 1, 1, 0);

    $("#freccia").css("opacity", Math.pow(c, 5));

}

$(document).ready(() => {
    inizializzaMenu();
    document.body.onscroll = gestisciScroll;


})

function inizializzaMenu() {


    let elementiMenu = document.getElementsByClassName("elementoMenu");
    console.log(elementiMenu);
    /*
        for (let i = 0; i < elementiMenu.length; i++) {
            let elementoMenu = elementiMenu[i];
            console.log(elementoMenu);
            $(elementoMenu).hover(
                () => {
                    $(elementoMenu).animate({
                            zoom: "150%",
                            transform: "scale(2, 2)"
                        },

                    )
                },
                () => {
                    $(elementoMenu).animate({
                            zoom: "100%",
                            ransform: "scale(2, 2)"
                        },

                    )
                }
            )
        }*/
}





let slideIndex = 1;
showSlides(slideIndex)
// Next/previous controls               s   s
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

}