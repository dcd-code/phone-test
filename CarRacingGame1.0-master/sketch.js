// On a touchscreen device, touch
// the canvas using one or more fingers
// at the same time
function draw() {
  clear();
  let display = touches.length + ' touches';
  text(display, 5, 10);
}