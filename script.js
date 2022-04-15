const gridDisplay = document.querySelector(".slider-display");
const submitGridButton = document.querySelector(".submit-grid");
const slider = document.getElementById("myRange");
const divContainer = document.querySelector(".container");
const sketchDivs = document.querySelectorAll('.sketch-div');
const blackButton = document.querySelector('.black');
const grayButton = document.querySelector('.gray');
const rainbowButton = document.querySelector('.rainbow');
const clearButton = document.querySelector('.clear');

const clicked = document.querySelector(".clicked");

let numberOfDivs = 16;
let mouseClickedDown = false;


slider.addEventListener("change", (e) => {
   gridDisplay.innerText = slider.value;
   numberOfDivs = slider.value;
})

document.addEventListener('mousemove', (e) => {
   clicked.innerText = mouseClickedDown;
})
//-----------------------------------------------
window.addEventListener("mouseup", (e) => {
   mouseClickedDown = false;
   return;
})
//----------------------------------------------

submitGridButton.addEventListener('click', (e) => {

   createDivs(numberOfDivs);
   blackpaint();
   blackpaintTouch();

   // const sketchDivs = document.querySelectorAll('.sketch-div');

   // mouseClickedDown = false;
   // sketchDivs.forEach(div => div.addEventListener("mousedown", (e) => {

   //    mouseClickedDown = true;
   //    console.log("wcisniete");

   //    sketchDivs.forEach(div => div.addEventListener("mousemove", (e) =>  {
         
   //       if ( mouseClickedDown == true) {
   //       div.style.backgroundColor = "black";
   //       } 
   //    }))
   //    sketchDivs.forEach(div => document.addEventListener("mouseup", (e) => {
   //       mouseClickedDown = false;
   //    }))
   // }))


   mouseClickedDown = false;
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

const blackpaint = () => {
   const sketchDivs = document.querySelectorAll('.sketch-div');
   
   mouseClickedDown = false;
   sketchDivs.forEach(div => div.addEventListener("mousedown", (e) => {

      mouseClickedDown = true;
      div.style.backgroundColor = "black";

      sketchDivs.forEach(div => div.addEventListener("mousemove", (e) =>  {
         

         if ( mouseClickedDown == true) {
         div.style.backgroundColor = "black";
         } else return;
      }))
      sketchDivs.forEach(div => window.addEventListener("mouseup", (e) => {
         mouseClickedDown = false;
         return;
      }))
   }))
}
const blackpaintTouch = () => {
   const sketchDivs = document.querySelectorAll('.sketch-div');
   
   mouseClickedDown = false;
   sketchDivs.forEach(div => div.addEventListener("touchstart", (e) => {

      mouseClickedDown = true;
      div.style.backgroundColor = "black";

      sketchDivs.forEach(div => div.addEventListener("touchmove", (e) =>  {
         

         if ( mouseClickedDown == true) {
         div.style.backgroundColor = "black";
         } else return;
      }))
      sketchDivs.forEach(div => window.addEventListener("touchend", (e) => {
         mouseClickedDown = false;
         return;
      }))
   }))
}





// const blackpaint = () => {
// //    const sketchDivs = document.querySelectorAll('.sketch-div');
   
// //    mouseClickedDown = false;

// //    divContainer.addEventListener("mousedown", () => {
// //       mouseClickedDown = true;
// //    })
// //    window.addEventListener("mouseup", () => {
// //       mouseClickedDown = false;
// //    })
// //    sketchDivs.forEach(div => div.addEventListener("mouseover", () => {
// //       if (mouseClickedDown == true) {
// //          div.style.backgroundColor = "pink";
// //       }
// //    }))

//    sketchDivs.forEach(div => div.addEventListener("mousedown", (e) => {

//       mouseClickedDown = true;

//       sketchDivs.forEach(div => div.addEventListener("mousemove", (e) =>  {
         

//          if ( mouseClickedDown == true) {
//          div.style.backgroundColor = "pink";
//          } else return;
//       }))
//       sketchDivs.forEach(div => window.addEventListener("mouseup", (e) => {
//          mouseClickedDown = false;
//          return;
//       }))
//    }))
// }
