function clickMe() {
reset();
var one = Math.floor(Math.random()*6)+1;
var two = Math.floor(Math.random()*6)+1;
function firstDice(one) {
    let i = 0;
    if (one === 1) {
        let first1 = document.getElementsByClassName("uno1");
        for (i; i < first1.length; i++) {
            first1[i].style.backgroundColor="white";
            first1[i].style.border="2px solid black";
        }
    } else if (one === 2) {
        let second1 = document.getElementsByClassName("due1");
        for (i; i < second1.length; i++) {
            second1[i].style.backgroundColor="white";
            second1[i].style.border="2px solid black";
        }
    } else if (one === 3) {
        let third1 = document.getElementsByClassName("tre1");
        for (i; i < third1.length; i++) {
            third1[i].style.backgroundColor="white";
            third1[i].style.border="2px solid black";
        }
    } else if (one === 4) {
        let fourth1 = document.getElementsByClassName("quattro1");
        for (i; i < fourth1.length; i++) {
            fourth1[i].style.backgroundColor="white";
            fourth1[i].style.border="2px solid black";
        }
    } else if (one === 5) {
        let fifth1 = document.getElementsByClassName("cinque1");
        for (i; i < fifth1.length; i++) {
            fifth1[i].style.backgroundColor="white";
            fifth1[i].style.border="2px solid black";
        }
    } else if (one === 6) {
        let sixth1 = document.getElementsByClassName("sei1");
        for (i; i < sixth1.length; i++) {
            sixth1[i].style.backgroundColor="white";
            sixth1[i].style.border="2px solid black";
        }
    }
}
function secondDice(two) {
    let i = 0;
    if (two === 1) {
        let first2 = document.getElementsByClassName("uno2");
        for (i; i < first2.length; i++) {
            first2[i].style.backgroundColor="white";
            first2[i].style.border="2px solid black";
        }
    } else if (two === 2) {
        let second2 = document.getElementsByClassName("due2");
        for (i; i < second2.length; i++) {
            second2[i].style.backgroundColor="white";
            second2[i].style.border="2px solid black";
        }
    } else if (two === 3) {
        let third2 = document.getElementsByClassName("tre2");
        for (i; i < third2.length; i++) {
            third2[i].style.backgroundColor="white";
            third2[i].style.border="2px solid black";
        }
    } else if (two === 4) {
        let fourth2 = document.getElementsByClassName("quattro2");
        for (i; i < fourth2.length; i++) {
            fourth2[i].style.backgroundColor="white";
            fourth2[i].style.border="2px solid black";
        }
    } else if (two === 5) {
        let fifth2 = document.getElementsByClassName("cinque2");
        for (i; i < fifth2.length; i++) {
            fifth2[i].style.backgroundColor="white";
            fifth2[i].style.border="2px solid black";
        }
    } else if (two === 6) {
        let sixth2 = document.getElementsByClassName("sei2");
        for (i; i < sixth2.length; i++) {
            sixth2[i].style.backgroundColor="white";
            sixth2[i].style.border="2px solid black";
        }
    }
}
function changeH1(one, two) {
    let header = document.querySelector("h1")
    if (one < two) {
        header.textContent = "Computer wins!"
    } else if (one > two) {
        header.textContent = "Player wins!"
    } else {
        header.textContent = "It's a tie!"
    }
}
function reset () {
    pallina = document.getElementsByClassName("pallina")
    let i = 0;
    for (i; i < pallina.length; i++) {
        pallina[i].style.backgroundColor = "red";
        pallina[i].style.border = "0";
    }
}
firstDice(one);
secondDice(two);
changeH1(one, two);
}
