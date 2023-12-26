/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/playground/playground.js
class PlayGround {
  moveGoblin() {
    const goblin = document.querySelector('.playground-img');
    const collectionElements = document.querySelectorAll('.playground-item');
    let positionRandom = Math.floor(Math.random() * collectionElements.length);
    for (let i = 0; i <= collectionElements.length - 1; i++) {
      if (collectionElements[i].firstElementChild) {
        if (i === positionRandom) {
          while (i === positionRandom) {
            positionRandom = Math.floor(Math.random() * collectionElements.length);
          }
        }
        collectionElements[i].firstElementChild.remove();
      }
    }
    collectionElements[positionRandom].append(goblin);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

// comment this to pass build
// const unusedVariable = "variable";

// // for demonstration purpose only
// export default function demo(value) {
//   return `Demo: ${value}`;
// }

// console.log("app.js included");

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new PlayGround(document.querySelector('.playground'));
  setInterval(goblin.moveGoblin, 1000);
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;