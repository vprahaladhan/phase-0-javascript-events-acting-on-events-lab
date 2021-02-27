// Your code here
const dodger = document.getElementById('dodger');

const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  dodger.style.left = (left > 0) ? `${left - 1}px` : dodger.style.left;
}

const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  dodger.style.left = (left < 360) ? `${left + 1}px` : dodger.style.left;
}

const checkScrollDirection = event => isScrollDirectionUp(event) ? moveDodgerLeft() : moveDodgerRight(); 

const isScrollDirectionUp = event => event.wheelDelta ? event.wheelDelta > 0 : event.deltaY < 0;

document.body.addEventListener('wheel', checkScrollDirection);