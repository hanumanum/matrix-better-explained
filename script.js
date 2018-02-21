/// <reference path="../p5.d/p5.global-mode.d.ts" />
var matrix, place, pixelSize = 22, dim = 20, currColor = "#ffdd00";
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

matrixSimpson = [
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
]


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
]

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
]

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
]

var matrixSnake = [ 
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#C0392B","#C0392B","#C0392B","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
  ["#ffffff","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#C0392B","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
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
]


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
  drawGrid();
  drawPallette();
}


function draw() {
  if (mouseIsPressed && isInGrid(mouseX, mouseY)) {
    setPixelColor(mouseX, mouseY, currColor);
    drawGrid();

  }
}


function mouseClicked() {
  if (isInGrid(mouseX, mouseY)) {
    mDiv.innerHTML = printMatrixText(matrix);
  }
  if(isInPalette(mouseX, mouseY)){
    currColor=palette[floor(mouseY / pixelSize)];
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
  matrix[floor(y / pixelSize)][floor(x / pixelSize)] = clr;
}

function isInGrid(x, y) {
  return y < pixelSize * dim && x < pixelSize * dim && y >= 0 && x >= 0;
}


function isInPalette(x, y) {
  return x > pixelSize * dim && x<pixelSize * dim + pixelSize && y < pixelSize * dim && y >= 0;
}



$( document ).ready(function() {
  $(".examples").click(function(){
    switch (this.id) {
      case "ex1":
        matrix = matrixAngle;
        break;
      case "ex2":
        matrix = matrixTetris;
        break;
      case "ex3":
        matrix = matrixArtsakh;
        break; 
      case "ex4":
        matrix = matrixGOL;
        break;         
      case "ex5":
        matrix = matrixSnake;
        break;     
      case "ex6":
        matrix = matrixSimpson;
        break;
      case "ex7":
        fillMatrix(dim);
        break;
      default:
        break;
    }
    drawGrid();
    mDiv.innerHTML =printMatrixText(matrix);

  })
});