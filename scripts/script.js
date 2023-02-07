var element = document.getElementById("skillcard")
var emtshape = document.getElementById("skillcardshape")
var skillheader = document.getElementById("skillheader")
var skilltext = document.getElementById("skilltext")
var leftside = document.getElementById("leftside")
var rightside = document.getElementById("rightside")

// animation: showside 1s forwards;
// animation-delay: 4200ms;

function scrollAnim() {
    var ypos = window.pageYOffset;

    if (ypos > 20) {
        element.style.animation = "showRectangle 300ms forwards";
        element.style.visibility = "visible";
        leftside.style.visibility = "visible";
        rightside.style.visibility ="visible";
        emtshape.style.animation = "rectangledash 4s alternate forwards";
        emtshape.style.animationDelay = "400ms";
        skillheader.style.animation = "showRectangle 300ms forwards";
        skillheader.style.animationDelay = "3500ms";
        skilltext.style.animation = "showRectangle 300ms forwards";
        skilltext.style.animationDelay = "3500ms";
        leftside.style.animation = "showside 200ms forwards";
        leftside.style.animationDelay = "3700ms"
        rightside.style.animation = "showside 200ms forwards";
        rightside.style.animationDelay = "3700ms"
    


    }
    else {
        element.style.visibility = "visible";
        element.style.animation = "hideRectangle 300ms forwards";
        leftside.style.visibility = "hidden";
        rightside.style.visibility ="hidden";
}
}

import skills from './skills.json' assert { type: 'json'};
var cardnum = 0;

function nextcard() {
    if (cardnum >= 5) {
        cardnum = 0;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
        document.getElementById("skilltext").innerHTML = skills.skills[cardnum].description;
        document.getElementById("leftheader").innerHTML = skills.skills[5].language;
        document.getElementById("rightheader").innerHTML = skills.skills[(cardnum+1)].language;
    }
    else if (cardnum == 4) {
        cardnum = cardnum + 1;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
        document.getElementById("skilltext").innerHTML = skills.skills[cardnum].description;
        document.getElementById("rightheader").innerHTML = skills.skills[0].language;
        document.getElementById("leftheader").innerHTML = skills.skills[(cardnum-1)].language;
    }
    else {
        cardnum = cardnum + 1;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
        document.getElementById("skilltext").innerHTML = skills.skills[cardnum].description;
        document.getElementById("rightheader").innerHTML = skills.skills[(cardnum+1)].language;
        document.getElementById("leftheader").innerHTML = skills.skills[(cardnum-1)].language;
    }
}

function prevcard() {
    if (cardnum <= 0) {
        cardnum = 5;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
        document.getElementById("skilltext").innerHTML = skills.skills[cardnum].description;
        document.getElementById("leftheader").innerHTML = skills.skills[4].language;
        document.getElementById("rightheader").innerHTML = skills.skills[(cardnum+1)].language;
        console.log(cardnum)
    }
    else if (cardnum <= 1) {
        cardnum = cardnum - 1;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
        document.getElementById("skilltext").innerHTML = skills.skills[cardnum].description;
        document.getElementById("rightheader").innerHTML = skills.skills[0].language;
        document.getElementById("leftheader").innerHTML = skills.skills[5].language;
        console.log(cardnum)
    }
    else if (cardnum >= 5) {
        cardnum = cardnum - 1;
        document.getElementById("skillheader").innerHTML = skills.skills[4].language;
        document.getElementById("skilltext").innerHTML = skills.skills[4].description;
        document.getElementById("rightheader").innerHTML = skills.skills[5].language;
        document.getElementById("leftheader").innerHTML = skills.skills[cardnum-1].language;
        console.log(cardnum)
    }
    else {
        cardnum = cardnum - 1;
        document.getElementById("skillheader").innerHTML = skills.skills[cardnum].language;
        document.getElementById("skilltext").innerHTML = skills.skills[cardnum].description;
        document.getElementById("rightheader").innerHTML = skills.skills[(cardnum+1)].language;
        document.getElementById("leftheader").innerHTML = skills.skills[(cardnum-1)].language;
        console.log(cardnum)
    }

}
document.getElementById("leftbutton").addEventListener("click", prevcard)
document.getElementById("rightbutton").addEventListener("click", nextcard)
window.addEventListener("scroll", scrollAnim);
