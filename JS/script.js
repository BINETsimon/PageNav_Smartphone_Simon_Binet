var DROPDOWN = false;
var BMENU = false;

function drop(){
    var dd = document.getElementById("dropdown");

    if (DROPDOWN == false){
        dd.style.height = "100px";
        DROPDOWN = true;

        if (BMENU == true){
            Burger();
            BMENU = false;
        }
    }else{
        dd.style.height = "60px";
        DROPDOWN = false;
    }
}

function Burger(){
    var B1 = document.getElementById("B1");
    var B2 = document.getElementById("B2");
    var B3 = document.getElementById("B3");
    var mobilnav = document.getElementById("mobilnav");

    if (BMENU == false){
        B1.style.transform = "rotate(45deg) translateX(8px) translateY(8px)"
        B3.style.transform ="rotate(-45deg) translateX(8px) translateY(-8px)"
        B2.style.opacity = "0";
        mobilnav.style.left = "0%";
        BMENU = true;
        if (DROPDOWN == true){
            drop();
            DROPDOWN = false;
        }
    }else{
        B1.style.transform = "rotate(0deg) translateX(0px) translateY(0px)"
        B3.style.transform ="rotate(0deg) translateX(0px) translateY(0px)"
        B2.style.opacity = "1";
        mobilnav.style.left = "-100%";
        BMENU = false;
    }
}

var SavePixel = 0;
var CheckPixel = 0;
var scrollCheck = 0;
var naveFade = false;

function firstdiv(){

    scrollCheck = document.documentElement.scrollTop;

    var header = document.getElementById("header");

    if (CheckPixel < scrollCheck) {
        if (((scrollCheck - SavePixel) >= 15) && (naveFade == false)){
            header.style.opacity = "0";
            naveFade = true;
        }else if(naveFade == true){
            SavePixel = scrollCheck;
        }
    }else{
        if (naveFade == true){
            header.style.opacity = "1";
            naveFade = false;
        }
        SavePixel = scrollCheck;
    }
    CheckPixel = scrollCheck;

    console.log(CheckPixel + " > " + SavePixel + " > " + scrollCheck);
    
    
    var anim1 = document.getElementById('animborder1');
    var anim2 = document.getElementById('animborder2');
    var anim3 = document.getElementById('animborder3');
    var anim4 = document.getElementById('animborder4');
    var anim5 = document.getElementById('animborder5');
    var animbBG = document.getElementById('animbg1');
    var animH1 = document.getElementById('txt1');
    var animH2 = document.getElementById('txt2');

    if((scrollCheck >= 0) && (scrollCheck <= 500)){
        anim1.classList.add('animation1');
        anim2.classList.add('animation2_3');
        anim3.classList.add('animation2_3');
        anim4.classList.add('animation4_5');
        anim5.classList.add('animation4_5');
        animbBG.classList.add('animationBG');   
        animH1.classList.add('animationTXT');
        animH2.classList.add('animationTXT');
    }else{
        anim1.classList.remove('animation1');
        anim2.classList.remove('animation2_3');
        anim3.classList.remove('animation2_3');
        anim4.classList.remove('animation4_5');
        anim5.classList.remove('animation4_5');
        animbBG.classList.remove('animationBG');   
        animH1.classList.remove('animationTXT');
        animH2.classList.remove('animationTXT');
    }

    var img1 = document.getElementById("img1");
    var txt3 = document.getElementById("txt3");
    var txt4 = document.getElementById("txt4");

    if((scrollCheck >= 550) && (scrollCheck <= 1300)){
        img1.style.transform = "translateY(0px)"
        txt3.classList.add('animationTXT');
        txt4.classList.add('animationTXT');
    }else{
        img1.style.transform = "translateY(-190px)"
        txt3.classList.remove('animationTXT');
        txt4.classList.remove('animationTXT');
    }
}

firstdiv();


setInterval(TimingText ,1000);
var incremental = 0;

function TimingText() {
    var texte = ["Programmer", "Photoshoper", "Jouer", "Lire des mangas"]
    document.getElementById("txt5").innerHTML = texte[incremental];
    incremental++;
    if (incremental == 4){
        incremental = 0;
    }
}

TimingText();