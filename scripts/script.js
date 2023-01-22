var element = document.getElementById("skillcard")
var emtshape = document.getElementById("skillcardshape")

function scrollAnim() {
    var ypos = window.pageYOffset;

    if (ypos > 100  ) {
        element.style.visibility = "visible";
        emtshape.style.animation = "rectangledash 5s alternate forwards";
        emtshape.style.animationDelay = "400ms";


    }
    else {
        element.style.visibility = "hidden";
        emtshape.style.animation =    }
}

window.addEventListener("scroll", scrollAnim);