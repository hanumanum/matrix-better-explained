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
