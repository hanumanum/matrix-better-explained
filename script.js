/// <reference path="p5.d/p5.global-mode.d.ts" />
var matrix, place, pixelSize = 22, dim = 20, currColor = "#ffdd00", pointerCoords;
var assignetPoints = [];
var animation = function () { };

if (matrix !== undefined) {
  dim = matrix.length;
}
else {
  fillMatrix(dim);
}


function setup() {
  var canvas = createCanvas(pixelSize * dim + pixelSize, pixelSize * dim + 5);
  canvas.parent("sketch-holder");
  background("gray");
  mDiv = document.getElementById("matrix");
  mDiv.innerHTML = printMatrixText(matrix);
  pointerCoordsDiv = document.getElementById("pointerCoords");
  drawGrid();
  drawPallette();
}


function draw() {
  //
  //animation();
  if (mouseIsPressed && isInGrid(mouseX, mouseY)) {
    frameRate(60);
    setPixelColor(mouseX, mouseY, currColor);
    drawGrid();
    mDiv.innerHTML = printMatrixText(matrix);
    //assignetPoints.push(getIndexByCoords(mouseX, mouseY));
  }
  else if (mouseIsPressed && isInPalette(mouseX, mouseY)) {
    currColor = palette[floor(mouseY / pixelSize)];
  }
  else if (animation !== undefined) {
    animation();
    drawGrid();
    mDiv.innerHTML = printMatrixText(matrix);

  }

}

/*
function mouseClicked() {
  if (isInGrid(mouseX, mouseY)) {
    
  }
  if(isInPalette(mouseX, mouseY)){
    
  }
}
*/


function mouseMoved() {
  if (isInGrid(mouseX, mouseY)) {
    var indx = getIndexByCoords(mouseX, mouseY);
    pointerCoordsDiv.innerHTML = "matrix[" + indx.indY + "][" + indx.indX + "]";
  }
}


function drawGrid() {

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[0].length; x++) {
      fill(matrix[y][x]);
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }

  strokeWeight(3);
  noFill();
  rect(0, 0, dim * pixelSize, dim * pixelSize);
  strokeWeight(1);
}

function drawPallette() {
  for (var y in palette) {
    fill(palette[y]);
    rect(pixelSize * dim, y * pixelSize, pixelSize, pixelSize);
  }

  strokeWeight(3);
  noFill();
  rect(pixelSize * dim, 0, pixelSize, dim * pixelSize);
  strokeWeight(1);

}


function printMatrixText(matrix) {
  var text = "var matrix = [ <br>";
  for (var y = 0; y < matrix.length; y++) {
    text += "&nbsp&nbsp&nbsp&nbsp&nbsp[";
    for (var x = 0; x < matrix[0].length; x++) {
      text += '"<span style="color:' + matrix[y][x] + '">' + matrix[y][x] + '</span>"'
      if (x < matrix[0].length - 1) {
        text += ',';
      }
    }
    text += "]";
    if (y < matrix.length - 1) {
      text += ",<br>";
    }
  }

  text += "<br>]";
  return text;

}


function fillMatrix(dim) {
  matrix = new Array(dim).fill([]);
  for (var i = 0; i < dim; i++) {
    var row = new Array(dim).fill("#ffffff");
    matrix[i] = row;
  }

}


function setPixelColor(x, y, clr) {
  var indx = getIndexByCoords(x, y);
  matrix[indx.indY][indx.indX] = clr;
}


function getIndexByCoords(x, y) {
  return {
    indY: floor(y / pixelSize),
    indX: floor(x / pixelSize)
  }
}

function isInGrid(x, y) {
  return y < pixelSize * dim && x < pixelSize * dim && y >= 0 && x >= 0;
}


function isInPalette(x, y) {
  return x > pixelSize * dim && x < pixelSize * dim + pixelSize && y < pixelSize * dim && y >= 0;
}

/* animatoins */
var step = 0;
$(document).ready(function () {
  $(".examples").click(function () {
    frameRate(1);
    switch (this.id) {
      case "ex1":
        step = 0
        fillMatrix(dim);
        //matrix = matrixAngle;
        animation = matrixAngleAnimation;
        break;
      case "ex2":
        step = 5;
        matrix = copyMatrixByValue(matrixTetris);
        animation = matrixTetrisAnimation;
        break;
      case "ex3":
        step = 0;
        matrix = copyMatrixByValue(matrixArtsakh);
        animation = matrixFlagAnimation;
        break;
      case "ex4":
        step = 0;
        matrix = copyMatrixByValue(matrixGOL);
        animation = matrixGOLAnimation;
        break;
      case "ex5":
        step = 0; 
        matrix = copyMatrixByValue(matrixSnake);
        animation = matrixSnakeAnimation;
        break;
      case "ex6":
        step = 0;
        matrix = copyMatrixByValue(matrixSimpson);
        animation = matrixSimpsonAnimation;
        break;
      case "ex7":
        animation = undefined;
        fillMatrix(dim);
        break;
      default:
        break;
    }
    drawGrid();
    mDiv.innerHTML = printMatrixText(matrix);
  })



  $("#matrix").mouseover(function(){
    noLoop();
  });

  $("#matrix").mouseout(function(){
    console.log("out");
    loop();
  });
  

});


function matrixAngleAnimation() {
  if (step < 20) {
    matrix[step][step] = random(palette);
    step++;
  }
}


function matrixTetrisAnimation() {
  if (step + 2 < 17) {
    matrix[step + 1][12] = "#3498DB";
    matrix[step + 2][12] = "#3498DB"
    matrix[step + 3][12] = "#3498DB";
    matrix[step][12] = "#ffffff";

    matrix[step + 2][13] = "#3498DB";
    matrix[step + 1][13] = "#ffffff";
    step++;
  }

}

var flagPoints = [
  { r: 4, c: 19, cl: "#C0392B" },
  { r: 4, c: 18, cl: "#C0392B" },
  { r: 5, c: 18, cl: "#C0392B" },
  { r: 5, c: 17, cl: "#C0392B" },
  { r: 6, c: 17, cl: "#C0392B" },
  { r: 6, c: 16, cl: "#C0392B" },
  { r: 7, c: 15, cl: "#C0392B" },
  { r: 7, c: 16, cl: "#C0392B" },

  { r: 8, c: 14, cl: "#2874A6" },
  { r: 8, c: 15, cl: "#2874A6" },
  { r: 9, c: 13, cl: "#2874A6" },
  { r: 9, c: 14, cl: "#2874A6" },
  { r: 10, c: 13, cl: "#2874A6" },
  { r: 10, c: 14, cl: "#2874A6" },
  { r: 11, c: 14, cl: "#2874A6" },
  { r: 11, c: 15, cl: "#2874A6" },


  { r: 15, c: 19, cl: "#D68910" },
  { r: 15, c: 18, cl: "#D68910" },
  { r: 14, c: 18, cl: "#D68910" },
  { r: 14, c: 17, cl: "#D68910" },
  { r: 13, c: 17, cl: "#D68910" },
  { r: 13, c: 16, cl: "#D68910" },
  { r: 12, c: 15, cl: "#D68910" },
  { r: 12, c: 16, cl: "#D68910" }
];

shuffle(flagPoints);

function matrixFlagAnimation() {
  if (step < 24) {   //8,8,8,
    matrix[flagPoints[step].r][flagPoints[step].c] = flagPoints[step].cl;
    step++;
  }
}

function matrixSimpsonAnimation() {

  if (step % 2 == 0) {
    matrix[12][9] = "#ffffff";
    matrix[13][9] = "#ffffff";
    matrix[12][11] = "#000000";
    matrix[13][11] = "#000000";
  }
  else {
    matrix[12][9] = "#000000";
    matrix[13][9] = "#000000";
    matrix[12][11] = "#ffffff";
    matrix[13][11] = "#ffffff";
  }

  step++
}

function matrixGOLAnimation() {
  if (step < 16) {
    if(step<6){
      offset = step + 4;
      matrix[9][offset] = "#ffdd00";
      matrix[9][offset-1] = "#ffffff";
    }
    else if(step>=6){
      offset = step + 4;
      matrix[offset][9] = "#ffdd00";
      matrix[offset-1][9] = "#ffffff";
    }
    step++;
  }


}


function matrixSnakeAnimation(){
  if(step<10){
    matrix[step+2][4] = "#ffffff";
    matrix[step+10][15] = "#C0392B";
    step++;
  }
}



function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}

function copyMatrixByValue(matrix){
  var newMatrix = JSON.parse(JSON.stringify(matrix));
  return newMatrix;
}

/*var m =copyMatrixByValue(matrixGOL);
console.log(m);
*/
/*
function* next(index) {
  while (index < 2) {
    yield index++;
  }
}
*/