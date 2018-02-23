/// <reference path="p5.d/p5.global-mode.d.ts" />
var matrix, place, pixelSize = 22, dim = 20, currColor = "#ffdd00", pointerCoords;
var assignetPoints = [];
var animation = function(){};
var palette = ["#ffdd00"
              ,"#ffffff"
              ,"#000000"
              ,"#45B39D"
              ,"#A04000"
              ,"#C0392B"
              ,"#3498DB"
              ,"#8E44AD"
              ,"#28B463"
              ,"#DC7633"
              ,"#2874A6"
              ,"#F7DC6F"
              ,"#E74C3C"
              ,"#2ECC71"
              ,"#641E16"
              ,"#99A3A4"
              ,"#E59866"
              ,"#6C3483"
              ,"#D68910"
              ,"#F1948A"];

var matrixSimpson = [
  ["#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#000000","#000000","#000000","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#000000","#3498DB","#000000","#3498DB","#000000","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#000000","#3498DB","#000000","#3498DB","#000000","#000000","#000000","#000000","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#000000","#3498DB","#000000","#000000","#000000","#000000","#ffdd00","#000000","#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#000000","#000000","#ffdd00","#000000","#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#000000","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB","#3498DB","#3498DB"],
  ["#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#000000","#000000","#000000","#ffdd00","#000000","#000000","#000000","#3498DB","#3498DB","#3498DB"],
  ["#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#3498DB","#3498DB"],
  ["#3498DB","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#000000","#3498DB","#3498DB"],
  ["#3498DB","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#ffffff","#000000","#000000","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#000000","#3498DB","#3498DB"],
  ["#3498DB","#000000","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#ffffff","#000000","#000000","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#000000","#3498DB","#3498DB"],
  ["#000000","#ffdd00","#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#ffffff","#ffffff","#ffffff","#000000","#ffdd00","#ffdd00","#000000","#000000","#3498DB","#3498DB","#3498DB"],
  ["#000000","#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#000000","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB","#3498DB"],
  ["#3498DB","#000000","#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB"],
  ["#3498DB","#3498DB","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB"],
  ["#3498DB","#3498DB","#000000","#ffdd00","#ffdd00","#ffdd00","#000000","#000000","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#3498DB"],
  ["#3498DB","#3498DB","#000000","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#3498DB","#3498DB"]
];


var matrixAngle = [ 
  ["#E74C3C","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#45B39D","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#8E44AD","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#F7DC6F","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#E59866","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#2ECC71","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#DC7633","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#E59866","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
];


var matrixTetris = [ 
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#F7DC6F","#F7DC6F","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#000000","#000000","#A04000","#ffffff","#ffffff","#ffffff","#ffffff","#F7DC6F","#F7DC6F","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#ffffff"],
  ["#F7DC6F","#F7DC6F","#000000","#A04000","#ffffff","#ffffff","#E74C3C","#ffffff","#A04000","#ffffff","#8E44AD","#ffffff","#ffffff","#8E44AD","#8E44AD","#8E44AD","#ffffff","#A04000","#28B463","#28B463"],
  ["#F7DC6F","#F7DC6F","#000000","#A04000","#A04000","#E74C3C","#E74C3C","#E74C3C","#A04000","#A04000","#8E44AD","#8E44AD","#DC7633","#8E44AD","#3498DB","#3498DB","#A04000","#A04000","#C0392B","#28B463"],
  ["#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#A04000","#8E44AD","#DC7633","#DC7633","#DC7633","#3498DB","#3498DB","#A04000","#E74C3C","#E74C3C","#E74C3C"]
];

var matrixArtsakh = [ 
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff"],
  ["#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#C0392B"],
  ["#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#C0392B","#C0392B"],
  ["#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#C0392B","#C0392B","#C0392B"],
  ["#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#ffffff","#ffffff","#2874A6","#2874A6","#2874A6","#2874A6"],
  ["#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#ffffff","#ffffff","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6"],
  ["#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#ffffff","#ffffff","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6"],
  ["#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#2874A6","#ffffff","#ffffff","#2874A6","#2874A6","#2874A6","#2874A6"],
  ["#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#ffffff","#ffffff","#D68910","#D68910","#D68910"],
  ["#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#ffffff","#ffffff","#D68910","#D68910"],
  ["#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#ffffff","#ffffff","#D68910"],
  ["#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#D68910","#ffffff","#ffffff"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"],
  ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"]
];

var matrixGOL = [ 
  ["#3498DB","#3498DB","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#3498DB","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffdd00","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#ffdd00","#ffffff","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#28B463","#28B463","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#28B463","#3498DB","#3498DB","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#3498DB","#28B463","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffdd00","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#28B463","#3498DB","#28B463","#3498DB"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#ffffff","#28B463","#28B463","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#ffffff","#ffffff","#28B463","#28B463","#28B463","#ffffff","#ffffff","#28B463","#ffffff","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#ffffff","#ffdd00","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#3498DB","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
  ["#3498DB","#3498DB","#3498DB","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"]
];

var matrixSnake = [ 
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
];



var matrixBorad = [ 
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"],
  ["#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#ffffff","#ffffff","#ffffff","#000000","#000000"]
];

if(matrix!==undefined){
  dim = matrix.length;

}
else{
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
  else if(mouseIsPressed && isInPalette(mouseX, mouseY)){
    currColor=palette[floor(mouseY / pixelSize)];
  }
  else if (mouseIsPressed && !(isInPalette(mouseX, mouseY) && isInGrid(mouseX, mouseY))){
    //noLoop();
    console.log("clicked otuside");
  }
  else if(animation!==undefined){
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
  if(isInGrid(mouseX,mouseY)){
    var indx = getIndexByCoords(mouseX,mouseY);
    pointerCoordsDiv.innerHTML = "matrix["+indx.indY+"][" + indx.indX + "]";
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
  rect(0,0,dim*pixelSize,dim*pixelSize);
  strokeWeight(1);
}

function drawPallette(){
    for (var y in palette) {
      fill(palette[y]);
      rect(pixelSize*dim, y * pixelSize, pixelSize, pixelSize);
    }
    
    strokeWeight(3);
    noFill();
    rect(pixelSize*dim,0,pixelSize,dim*pixelSize);
    strokeWeight(1);

}


function printMatrixText(matrix) {
  var text = "var matrix = [ <br>";
  for (var y = 0; y < matrix.length; y++) {
    text += "&nbsp&nbsp&nbsp&nbsp&nbsp[";
    for (var x = 0; x < matrix[0].length; x++) {
      text += '"<span style="color:'+matrix[y][x]+'">' + matrix[y][x] + '</span>"'
      if(x<matrix[0].length-1){
        text += ',';
      }
    }
    text += "]";
    if(y<matrix.length-1){
      text+=",<br>";
    }
  }

  text+="<br>]";
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
  var indx = getIndexByCoords(x,y);
  matrix[indx.indY][indx.indX] = clr;
}


function getIndexByCoords(x,y){
  return {
    indY:floor(y / pixelSize),
    indX:floor(x / pixelSize)
  }
}

function isInGrid(x, y) {
  return y < pixelSize * dim && x < pixelSize * dim && y >= 0 && x >= 0;
}


function isInPalette(x, y) {
  return x > pixelSize * dim && x<pixelSize * dim + pixelSize && y < pixelSize * dim && y >= 0;
}


var step = 0; //for animations
$( document ).ready(function() {
  $(".examples").click(function(){
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
        matrix = matrixTetris;
        animation = matrixTetrisAnimation;
        break;
      case "ex3":
        matrix = matrixArtsakh;
        animation = matrixFlagAnimation;
        break; 
      case "ex4":
        matrix = matrixGOL;
        animation = undefined;
        break;         
      case "ex5":
        matrix = matrixSnake;
        animation = undefined;
        break;     
      case "ex6":
        matrix = matrixSimpson;
        animation = undefined;
        break;
      case "ex7":
        animation = undefined;
        fillMatrix(dim);
        break;
      default:
        break;
    }
    drawGrid();
    mDiv.innerHTML =printMatrixText(matrix);
  })
});


function matrixAngleAnimation(){
  if(step<20){
    matrix[step][step] = random(palette);
    step++;
  }
}


function matrixTetrisAnimation(){
  if(step+2<17){
    matrix[step+1][12] = "#3498DB";
    matrix[step+2][12] = "#3498DB"
    matrix[step+3][12] = "#3498DB";
    matrix[step][12] = "#ffffff";

    matrix[step+2][13] = "#3498DB";
    matrix[step+1][13] = "#ffffff";
    step++;
  }

}

var flagPoints = [
  {r:4,c:19, cl:"#C0392B"},
  {r:4,c:18, cl:"#C0392B"},
  {r:5,c:18, cl:"#C0392B"},
  {r:5,c:17, cl:"#C0392B"},
  {r:6,c:17, cl:"#C0392B"},
  {r:6,c:16, cl:"#C0392B"},
  {r:7,c:15, cl:"#C0392B"},
  {r:7,c:16, cl:"#C0392B"},

  {r:8,c:14, cl:"#2874A6"},
  {r:8,c:15, cl:"#2874A6"},
  {r:9,c:13, cl:"#2874A6"},
  {r:9,c:14, cl:"#2874A6"},
  {r:10,c:13, cl:"#2874A6"},
  {r:10,c:14, cl:"#2874A6"},
  {r:11,c:14, cl:"#2874A6"},
  {r:11,c:15, cl:"#2874A6"},


  {r:15,c:19, cl:"#D68910"},
  {r:15,c:18, cl:"#D68910"},
  {r:14,c:18, cl:"#D68910"},
  {r:14,c:17, cl:"#D68910"},
  {r:13,c:17, cl:"#D68910"},
  {r:13,c:16, cl:"#D68910"},
  {r:12,c:15, cl:"#D68910"},
  {r:12,c:16, cl:"#D68910"}
];

shuffle(flagPoints);

function matrixFlagAnimation(){
  if(step<24){   //8,8,8,
    matrix[flagPoints[step].r][flagPoints[step].c] = flagPoints[step].cl;  

      /*
      if(step<8){
    
      }
      else if(step >=8 && step<16){

      }
      else if (step>=16 && step<24){

      }
      */
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

/*
function* next(index) {
  while (index < 2) {
    yield index++;
  }
}
*/