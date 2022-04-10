const gridDisplay = document.querySelector(".slider-display");
const submitGridButton = document.querySelector(".submit-grid");
const slider = document.getElementById("myRange");
const divContainer = document.querySelector(".container");
const sketchDivs = document.querySelectorAll('.sketch-div');

let numberOfDivs = 16;

slider.addEventListener("change", (e) => {
   gridDisplay.innerText = slider.value;
   numberOfDivs = slider.value;
})

submitGridButton.addEventListener('click', (e) => {
   console.log(`divów będzie ${numberOfDivs}`)
   divContainer.innerHTML = "";

   for (i=0; i < (numberOfDivs * numberOfDivs); i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add('sketch-div');
      divContainer.appendChild(newDiv);
   }
   divContainer.style.display = "grid";
   divContainer.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
   divContainer.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;


   const sketchDivs = document.querySelectorAll('.sketch-div');
   sketchDivs.forEach(div => div.addEventListener('mouseover', (e) => {
      console.log('cos niecos')
      div.style.backgroundColor = "black";
   }))
})

function createDivs (numberOfDivs) {

}
sketchDivs.forEach(div => div.addEventListener('mouseover', (e) => {
   console.log('cos niecos')
   div.style.backgroundColor = "black";
}))