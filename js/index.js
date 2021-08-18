// importing the main files from the html]

let burger = document.querySelector("#burger");
let menuItems = document.querySelector(".nav-items");

window.onscroll = () => {
    menuItems.classList.remove("active-item");
    
};

burger.addEventListener("click", () => {
    menuItems.classList.toggle("active-item");
});

const TypeWriter = function(textele, words, wait) {
    this.textele = textele;
    this.words = words;
    this.txt = "";
    this.wordindex = 0;
    this.wait = parseInt(wait, 10); //base of 10
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){
    const current = this.wordindex % this.words.length;
    const fulltxt = this.words[current];
    if(this.isDeleting){
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    }else{
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
    this.textele.innerHTML = `<h3 class ="txtes text-shadow">${this.txt}</h3>`
    let typeSpeed = 80;

    if(this.isDeleting){
        typeSpeed /= 3; //dividing the time 
    } 
    if(!this.isDeleting && this.txt === fulltxt){
        //make a pause at the end
        typeSpeed = 1000;
        // set the delete to true
        this.isDeleting = true;

    }
    else if(this.isDeleting && this.txt === ""){
        this.isDeleting = false;
        // move to thenext word
        this.wordindex ++;

        // pause before start typing
        typeSpeed  = 500;
    }
    // console.log(fulltxt);
    setTimeout(() => this.type(), typeSpeed);
}

//to initilise, init on DOM load
document.addEventListener('DOMContentLoaded', initi);

// init aoo
function initi(){
    const textele = document.querySelector('.text-type');
    const words = JSON.parse(textele.getAttribute("words-data"));//convertin an array to and string i guess
    const wait = textele.getAttribute("wait-timecc");
    // init typewriter
    new TypeWriter(textele, words, wait);
}

// addding the aos 
AOS.init();

// adding the owl carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    margin:15,

    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2

        },
        1000:{
            items:3,
        },
    }
 
});
 
// playig the music on the click of the button
const sound = new Audio('../Music/song.mp3');

const button_play = document.querySelector("#music-button");
const mute_button = document.getElementById("mute");

mute_button.addEventListener("click", muteMusic);
button_play.addEventListener("click", playMusic);

function playMusic() {
    document.getElementById("Mysound").muted = false;
    document.getElementById('Mysound').play();
}

function muteMusic() {
    document.getElementById("Mysound").muted = true;
}
