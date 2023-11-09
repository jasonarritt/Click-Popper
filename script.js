const playArea = {};
const player = {};

playArea.stats = document.querySelector('.stats');
playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.main');
playArea.btns = Array.from(document.querySelectorAll('.btn'));
Array.from(document.querySelectorAll('.page'));
console.log(playArea);

player.score = 0;
player.items = 3;

playArea.btns.forEach(function (item) {
  console.log(item);
  item.addEventListener('click', handleBtn);
});

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
