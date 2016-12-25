var squares = null;

function randomColor() {
  let color = Math.ceil(Math.random() * 5);
  switch(color) {
    case 1:
      return 'rgb(240, 171, 0)';
    case 2:
      return 'rgb(15, 170, 255)';
    case 3:
      return 'rgb(147, 201, 57)';
    case 4:
      return 'rgb(118, 10, 133)';
    case 5:
      return 'rgb(68, 69, 50)';
  }
}

function update() {
  for(let i=0; i<squares.length; i++) {
    let top = Math.round(Math.random() * window.innerHeight)  + "px";
    squares[i].style.top = top;
    let left = Math.round(Math.random() * window.innerWidth)  + "px";
    squares[i].style.left = left;
    squares[i].style.background = randomColor();
    squares[i].style.display = 'inline';
  }
}

function hide() {
  for(let i=0; i<squares.length; i++) {
    squares[i].style.display = 'none';
  }
}

function squaresSlideChanged(e) {
  console.dir(e.indexh);
  if (e.indexh === 0) {
    update();
  } else {
    hide();
  }
}

function squaresSlideReady(e) {
  if (e.indexh === 0) {
    update();
  }
}

function initialize(count = 20) {
  for(let i=0;i<count;i++) {
    document.body.innerHTML += '<div class="square"></div>';
  }
  squares = document.getElementsByClassName("square");
}

initialize();