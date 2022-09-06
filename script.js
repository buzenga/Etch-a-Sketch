const gridDisplay = document.querySelector(".slider-display");
const submitGridButton = document.querySelector(".submit-grid");
const slider = document.getElementById("myRange");
const divContainer = document.querySelector(".container");
const sketchDivs = document.querySelectorAll('.sketch-div');
const blackButton = document.querySelector('.black');
const grayButton = document.querySelector('.gray');
const rainbowButton = document.querySelector('.rainbow');
const clearButton = document.querySelector('.clear');

const playerInfo = document.querySelector(".player-info");


let numberOfDivs = 16;
let mouseClickedDown = false;
let mode = '';
let color = '';
let readyToSketch = false;


window.addEventListener("load", (e) => {
   
   color = 'black';
   mode = 'black';
   resetButtons();

   createDivs(numberOfDivs);
   readyToSketch = true;
   paint ();
   if (readyToSketch === true) {
      playerInfo.innerText = "Feel free to sketch...";
   }
   
})



slider.addEventListener("change", (e) => {
   gridDisplay.innerText = slider.value;
   numberOfDivs = slider.value;
})

submitGridButton.addEventListener('click', (e) => {
   color = 'black';
   mode = 'black';
   resetButtons();

   createDivs(numberOfDivs);
   readyToSketch = true;
   paint ();
   if (readyToSketch === true) {
      playerInfo.innerText = "You can start sketching";
   }
})

blackButton.addEventListener("click", () => {
   mode = "black";
   color = "black";
   resetButtons();
   // blackButton.classList.add("black-running")
})
grayButton.addEventListener("click", () => {
   mode = "gray";

   resetButtons();
   // grayButton.classList.add("gray-running")
})
rainbowButton.addEventListener("click", () => {
   mode = "rainbow";

   resetButtons();
   // rainbowButton.classList.add("rainbow-running")
})
clearButton.addEventListener("click", () => {
   resetButtons();
   if (readyToSketch === true) {
      playerInfo.innerText = "You can start sketching";
   }
   const sketchDivs = document.querySelectorAll('.sketch-div');
   sketchDivs.forEach(div => {
      div.style.backgroundColor = '';
   })
})

function createDivs (numberOfDivs) {

   divContainer.innerHTML = "";

   for (i=0; i < (numberOfDivs * numberOfDivs); i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add('sketch-div');
      divContainer.appendChild(newDiv);
   }
   divContainer.style.display = "grid";
   divContainer.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
   divContainer.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
}
const paint = () => {
   const sketchDivs = document.querySelectorAll('.sketch-div');
   mouseClickedDown = false;

   sketchDivs.forEach(div => div.addEventListener('mousedown', (e) => {
      playerInfo.innerText = "";
      mouseClickedDown = true;
      switch(mode) {
         case 'gray':
            let randomNumber = Math.floor(Math.random() * 255);
            color = `rgb(${randomNumber},${randomNumber},${randomNumber})`
            div.style.backgroundColor = color;
            break;
         case 'rainbow':
            let randomNumberR = Math.floor(Math.random() * 255);
            let randomNumberG = Math.floor(Math.random() * 255);
            let randomNumberB = Math.floor(Math.random() * 255);
            color = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`
            div.style.backgroundColor = color;
            break;
         default:
         div.style.backgroundColor = color;
         break;
      }
   }))
   window.addEventListener('mouseup', (e) => {
      mouseClickedDown = false;
   })
   sketchDivs.forEach(div => div.addEventListener('mouseover', (e) => {
      if (mouseClickedDown === true) {
         switch(mode) {
            case 'gray':
               let randomNumber = Math.floor(Math.random() * 255);
               color = `rgb(${randomNumber},${randomNumber},${randomNumber})`
               div.style.backgroundColor = color;
               break;
            case 'rainbow':
               let randomNumberR = Math.floor(Math.random() * 255);
               let randomNumberG = Math.floor(Math.random() * 255);
               let randomNumberB = Math.floor(Math.random() * 255);
               color = `rgb(${randomNumberR},${randomNumberG},${randomNumberB})`
               div.style.backgroundColor = color;
               break;
            default:
            div.style.backgroundColor = color;
            break;
         }
      } else return;
   }))
}
const resetButtons = () => {
   grayButton.classList.remove("gray-running");
   rainbowButton.classList.remove("rainbow-running");
   blackButton.classList.remove("black-running");

   switch (mode) {
      case 'black':
         blackButton.classList.add("black-running");
         break;
      case 'gray':
         grayButton.classList.add("gray-running");
         break;
      case 'rainbow':
         rainbowButton.classList.add("rainbow-running");
         break;
   }
}