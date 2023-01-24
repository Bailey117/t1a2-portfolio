var element = document.getElementById("skillcard")
var emtshape = document.getElementById("skillcardshape")

function scrollAnim() {
    var ypos = window.pageYOffset;

    if (ypos > 20) {
        element.style.animation = "showRectangle 300ms forwards";
        element.style.visibility = "visible";
        emtshape.style.animation = "rectangledash 5s alternate forwards";
        // make sure to change above ^^ was 5s
        emtshape.style.animationDelay = "400ms";


    }
    else {
        element.style.visibility = "visible";
        element.style.animation = "hideRectangle 300ms forwards";
}
}

import skills from './skills.json' assert { type: 'json'};
var cardnum = 0;

function nextcard() {
    if (cardnum >= 5) {
        cardnum = 0;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
    }
    else {
        cardnum = cardnum + 1;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
    }

}

document.getElementById("rightbutton").addEventListener("click", nextcard)
window.addEventListener("scroll", scrollAnim);
