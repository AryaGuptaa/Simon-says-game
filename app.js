let gameSeq =[];
let userSeq =[];

let btns = ["red", "yellow", "blue", "green"];

let started = false;
let level = 0;

document.querySelector("body").style.backgroundColor= "bisque";

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("Game is started");
        started = true;

        levelup();
    }
}); 

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);

}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn
    let randmIndx = Math.floor(Math.random() * 3);
    let randmColor = btns[randmIndx];
    let randmBtn = document.querySelector(`.${randmColor}`);

    gameSeq.push(randmColor);
    console.log(gameSeq);
    gameFlash(randmBtn);
}

function checkAns(indx) {
     
    if(userSeq[indx] === gameSeq[indx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score is <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function() {
          document.querySelector("body").style.backgroundColor = "bisque";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress); 
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}