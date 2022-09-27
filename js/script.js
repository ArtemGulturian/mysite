'use strict';

// Function to toggle mobile navigation
function toggleNavigation() {
  let nav = document.getElementById("mobile-nav");
  if (nav.classList.contains('w3-show')) {
    nav.classList.remove('w3-show');
  } else { 
    nav.classList.add('w3-show');
  }
}

// --- B U T T O N S ---
// how count of li we have
const allLi = document.querySelectorAll('li'),
      btns = document.querySelectorAll('button'),
      btnBox = document.querySelector('button_box');

// the button push and mark in orange 1,3,5 
btns[0].addEventListener('click', () => {
  for (let i = 0; i < allLi.length; i++) {
    if (allLi[i].style.background == "") {
      allLi[i].style.background = '#FEF201';
      allLi[i].style.fontSize = "16px";
      allLi[i].style.fontStyle = "oblique";
    } else {
      allLi[i].style.background = "";
      allLi[i].style.fontSize = "";
      allLi[i].style.fontStyle = "";
    }
    i+=1;
  }
});

// the button push and mark in blue 2, 4, 6
btns[1].addEventListener('click', () => {
  for (let i = 1; i < allLi.length; i++) {
    if (allLi[i].style.background == "") {
        allLi[i].style.background = '#5650E7';
    } else {
      allLi[i].style.background = "";
    }
    // if (allLi[0].eve == '#FEF201' && allLi[1].style.background == '#5650E7') {
    //   console.log("LIKE UKRANIAN NATIONAL FLAG");
    // }
    i+=1;
  }
});

// remove any collor
btns[2].addEventListener('click', () => {
  for(let i = 0; i < allLi.length; i ++) {
    if (allLi[i].style.background != "") {
      allLi[i].style.background = "";
      allLi[i].style.fontSize = "";
      allLi[i].style.fontStyle = "";
    }
  }
});

// --- E N D O F B U T T O N S ---

AOS.init({
  once: true
});