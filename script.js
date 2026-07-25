let arr1 = [];
let arr2 = [];

let red = document.querySelector(".red");
let purple = document.querySelector(".purple");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");

function gameflash() {

    let number = Math.floor(Math.random() * 4 + 1);
    arr1.push(number);

    for (let i = 0; i < arr1.length; i++) {
        setTimeout(() => {

            let btn;

            if (arr1[i] == 1) {
                btn = red;
            }
            else if (arr1[i] == 2) {
                btn = purple;
            }
            else if (arr1[i] == 3) {
                btn = green;
            }
            else if (arr1[i] == 4) {
                btn = yellow;
            }

            btn.classList.add("flash");
            setTimeout(function () {
                btn.classList.remove("flash");
            }, 400);

        }, i * 1000);
    }
}

function reset() {
    arr1 = [];   
    arr2 = [];
}

function check() {

   
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
        arr2 = [];
        gameflash();
    }
    else {
        document.querySelector(".para").innerHTML = "Game is over ..! click again on start button to continiue.";
        reset();
    }
}

let k = 0;
function level(){
    k++ ;
    document.querySelector(".para").innerHTML = "level "+k ;

}

red.addEventListener("click", function () {
    red.classList.add("flash");
    setTimeout(function () {
        red.classList.remove("flash");
    }, 400);
    arr2.push(1);
});

purple.addEventListener("click", function () {
    purple.classList.add("flash");
    setTimeout(function () {
        purple.classList.remove("flash");
    }, 400);
    arr2.push(2);
});

green.addEventListener("click", function () {
    green.classList.add("flash");
    setTimeout(function () {
        green.classList.remove("flash");
    }, 400);
    arr2.push(3);
});

yellow.addEventListener("click", function () {
    yellow.classList.add("flash");
    setTimeout(function () {
        yellow.classList.remove("flash");
    }, 400);
    arr2.push(4);
});

document.querySelector(".start-btn").addEventListener("click", function () {
   arr2 = [];
    gameflash();
    document.querySelector(".para").innerHTML = "level 0" 
});

document.querySelector(".check").addEventListener("click", function () {
   
    level();
    check();
   
});

// intro animation //

let sec1 = document.querySelector(".sec1");
let sec2 = document.querySelector(".sec2");

document.querySelector(".play-btn").addEventListener("click",function(){

    setTimeout(()=>{
     sec2.style.display = "none"
     sec1.classList.remove("sec1");
     sec1.classList.add("show-sec1");
    },800);
});