// Your code here
const dodger = document.getElementById('dodger');
// const game = document.getElementById('game');
// const dodgerStyle = window.getComputedStyle(dodger, null);
// const gameStyle = window.getComputedStyle(game, null);
// const maxWidth = gameStyle.width.replace("px", "") - dodgerStyle.width.replace("px", "")

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}

const checkScrollDirection = event => checkScrollDirectionIsUp(event) ? moveDodgerLeft() : moveDodgerRight(); 

const checkScrollDirectionIsUp = event => event.wheelDelta ? event.wheelDelta > 0 : event.deltaY < 0;

document.body.addEventListener('wheel', checkScrollDirection);