// dark light mode 
let darkMode= false;
function changeDarkMode(){
    if (darkMode){
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-image', 'url(img/texture-marbre-abstrait-fond-gris-noir-blanc-technique-artisanale.jpg)');
        document.documentElement.style.setProperty('--background-color', 'white'); 

        document.getElementById("dark-light-mode").innerHTML = "Dark Mode";
    }else{
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--background-image', 'none');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.getElementById("dark-light-mode").innerHTML = "Light Mode";
    }
}

// machine a ecrire js
var textArray = ['site', 'Portfolio',];
var typingDelay = 120;
var erasingDelay = 80;
var newTextDelay = 900; 
var textArrayIndex = 0;
var charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    document.getElementById("typed-text").textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("typed-text").textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
// haut de page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; //  Safari
  document.documentElement.scrollTop = 0; // POUR Chrome, Firefox, Opera
}
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.getElementById('myNav').classList.toggle('open');
});