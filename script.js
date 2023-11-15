const playArea = {};
const player = {};
let gameObj;
// const data = {
//   "data": [
//     {
//       "icon": "&#8902;",
//       "value": 10
//     },
//     {
//       "icon": "&#10031;",
//       "value": 30
//     },
//     {
//       "icon": "&#10036;",
//       "value": 50
//     },
//     {
//       "icon": "&#10042;",
//       "value": 70
//     },
//     {
//       "icon": "&#10084;",
//       "value": 75
//     },
//     {
//       "icon": "&#9813;",
//       "value": 50
//     },
//     {
//       "icon": "&#9822;",
//       "value": 60
//     },
//     {
//       "icon": "&#9924;",
//       "value": 40
//     },
//     {
//       "icon": "&#9971;",
//       "value": 100
//     },
//     {
//       "icon": "&#9729;",
//       "value": -50
//     },
//     {
//       "icon": "&#9785;",
//       "value": -100
//     },
//     {
//       "icon": "&#9760;",
//       "value": -250
//     },
//     {
//       "icon": "&#9791;",
//       "value": -20
//     }
//   ]
// }

playArea.stats = document.querySelector('.stats');
playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.main');
playArea.btns = Array.from(document.querySelectorAll('.btn'));
Array.from(document.querySelectorAll('.page'));
console.log(playArea);
document.addEventListener('DOMContentLoaded', getData);

player.score = 0;
player.items = 3;

playArea.btns.forEach(function (item) {
  console.log(item);
  item.addEventListener('click', handleBtn);
});

function getData() {
  fetch('https://api.myjson.com/bins/gungm')
    .then(function (rep) {
      return rep.json();
    })
    .then(function (data) {
      console.log(data);
      gameObj = data.data;
      console.log(gameObj);
    });
  console.log('DOM loaded');
}

function handleBtn(event) {
  event.preventDefault();
  console.log(event.target.classList.contains('new-game'));
  if (event.target.classList.contains('new-game')) {
    console.log('yes');
    startGame();
  }
}

function startGame() {
  console.log('Start');
}
