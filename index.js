var video = document.getElementById("period");
var boton_rep = document.getElementById("reproducir");

function reproducir() {
  if (video.paused) {
    video.play();
    boton_rep.innerHTML = "<i class='far fa-pause-circle fa-3x'></i>";
  } else {
    video.pause();
    boton_rep.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
  }
}

function reiniciar() {
  video.currentTime = 0;
  video.pause();
  boton_rep.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
}

function saltar(value) {
  video.currentTime += value;
}

var video2 = document.getElementById("period2");
var boton_rep2 = document.getElementById("reproducir2");

function reproducir2() {
  if (video2.paused) {
    video2.play();
    boton_rep2.innerHTML = "<i class='far fa-pause-circle fa-3x'></i>";
  } else {
    video2.pause();
    boton_rep2.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
  }
}

function reiniciar2() {
  video2.currentTime = 0;
  video2.pause();
  boton_rep2.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
}

function saltar2(value) {
  video2.currentTime += value;
}

/*Canvas*/

var canvas=document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");
var alfa = 1;

//Cielo
var grd = ctx.createLinearGradient(0,0,0,500);
grd.addColorStop(0,"rgba(0,0,0,"+alfa+")");
grd.addColorStop(1,"white");
ctx.fillStyle=grd;
ctx.fillRect(26,24,1000,500)

//Oceano
var grd2 = ctx.createLinearGradient(0,400,0,500);
grd2.addColorStop(0,"rgba(0,180,255,"+alfa+")");
grd2.addColorStop(1, "white");
ctx.fillStyle=grd2;
ctx.fillRect(26,400,1000,100);

//Montaña 1
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255,"+alfa+")";
ctx.moveTo(26,400);
ctx.lineTo(200,100);
ctx.lineTo(400,400);
ctx.fill();

//Montaña 2
ctx.beginPath();
ctx.fillStyle = "rgba(50,0,255,"+alfa+")";
ctx.moveTo(200,400);
ctx.lineTo(400,100);
ctx.lineTo(600,400);
ctx.fill();

//Montaña 3
ctx.beginPath();
ctx.fillStyle = "rgba(100,0,255,"+alfa+")";
ctx.moveTo(400,400);
ctx.lineTo(600,100);
ctx.lineTo(800,400);
ctx.fill();

//Montaña 4
ctx.beginPath();
ctx.fillStyle = "rgba(50,0,255,"+alfa+")";
ctx.moveTo(600,400);
ctx.lineTo(800,100);
ctx.lineTo(1000,400);
ctx.fill();

//Nieve Montaña 1
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,"+alfa+")";
ctx.moveTo(133,215);
ctx.lineTo(200,100);
ctx.lineTo(200,300);
ctx.fill();

//Nieve Montaña 1
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,"+alfa+")";
ctx.moveTo(200,300);
ctx.lineTo(200,100);
ctx.lineTo(267,200);
ctx.fill();

//Nieve Montaña 2
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,"+alfa+")";
ctx.moveTo(333,200);
ctx.lineTo(400,100);
ctx.lineTo(400,300);
ctx.fill();

//Nieve Montaña 2
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,"+alfa+")";
ctx.moveTo(400,300);
ctx.lineTo(400,100);
ctx.lineTo(467,200);
ctx.fill();

//Nieve Montaña 3
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,"+alfa+")";
ctx.moveTo(533,200);
ctx.lineTo(600,100);
ctx.lineTo(600,300);
ctx.fill();

//Nieve Montaña 3
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,"+alfa+")";
ctx.moveTo(600,300);
ctx.lineTo(600,100);
ctx.lineTo(667,200);
ctx.fill();


//Nieve Montaña 4
ctx.beginPath();
ctx.fillStyle = "rgba(255,255,255,"+alfa+")";
ctx.moveTo(733,200);
ctx.lineTo(800,100);
ctx.lineTo(800,300);
ctx.fill();

//Nieve Montaña 4
ctx.beginPath();
ctx.fillStyle = "rgba(210,210,255,"+alfa+")";
ctx.moveTo(800,300);
ctx.lineTo(800,100);
ctx.lineTo(867,200);
ctx.fill();

//Monte 1
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,150,"+alfa+")";
ctx.moveTo(24,400);
ctx.lineTo(200,300);
ctx.lineTo(200,450);
ctx.fill();

//Monte 1
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,100,"+alfa+")";
ctx.moveTo(200,450);
ctx.lineTo(200,300);
ctx.lineTo(400,400);
ctx.fill();

//Monte 2
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,150,"+alfa+")";
ctx.moveTo(600,400);
ctx.lineTo(800,300);
ctx.lineTo(800,450);
ctx.fill();

//Monte 2
ctx.beginPath();
ctx.fillStyle = "rgba(10,0,100,"+alfa+")";
ctx.moveTo(800,450);
ctx.lineTo(800,300);
ctx.lineTo(1000,400);
ctx.fill();

//Arbol 1
ctx.fillStyle = "rgba(100,0,20,"+alfa+")";
ctx.fillRect(100,200,20,150);

ctx.beginPath();
ctx.fillStyle = "rgba(0,140,25,"+alfa+")";
ctx.arc(140,180,40,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(0,110,25,"+alfa+")";
ctx.arc(80,190,30,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(0,80,25,"+alfa+")";
ctx.arc(110,200,50,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(0,50,25,"+alfa+")";
ctx.arc(120,230,30,0,2*Math.PI);
ctx.fill();

// Arbol 2
ctx.fillStyle = "rgba(100,0,20,"+alfa+")";
ctx.fillRect(900,200,20,150);

ctx.beginPath();
ctx.fillStyle = "rgba(0,50,25,"+alfa+")";
ctx.moveTo(850,300);
ctx.lineTo(910,200);
ctx.lineTo(970,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(0,80,25,"+alfa+")";
ctx.moveTo(850,250);
ctx.lineTo(910,150);
ctx.lineTo(970,250);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "rgba(0,110,25,"+alfa+")";
ctx.moveTo(850,200);
ctx.lineTo(910,100);
ctx.lineTo(970,200);
ctx.fill();



/*Tierra 1
ctx.beginPath();
ctx.fillStyle = "rgba(0,180,10,"+alfa+")";
ctx.arc(0,500,200,3.15,2*Math.PI);
ctx.fill();

//lineas curvas tierra 1
//Tierra 1
ctx.beginPath();
ctx.fillStyle = "rgba(0,100,10,"+alfa+")";
ctx.bezierCurveTo(0,470,50,470,50,500);
ctx.bezierCurveTo(50,470,100,470,100,500);
ctx.bezierCurveTo(100,470,150,470,150,500);
ctx.bezierCurveTo(150,470, 200,470,200,500);
ctx.bezierCurveTo(200,470,250,470,250,500);
ctx.fill();*/



//Tierra 2
ctx.beginPath();
ctx.fillStyle = "rgba(0,120,10,"+alfa+")";
ctx.arc(900,600,250,3.15,2*Math.PI);
ctx.fill();



/*CUADROS
//dibujo relleno
ctx.fillStyle = "cyan";
//parametros = (x1,y1,x2,y2);
ctx.fillRect(30,30,500,100);

//dibujo contorno
ctx.lineWidth=5;
ctx.strokeStyle = "rgba(255,0,255,1)";
ctx.rect(30,30,500,100);
ctx.stroke();

//CIRCULOS
ctx.beginPath();

//ctx.arc(x1, y1, r, startAngle, endAngle)

ctx.arc(300, 300, 80, 0, 2*Math.PI)

//relleno circulo
ctx.fillStyle = "green";
ctx.fill();

//contorno circulo
ctx.lineWidth=5;
ctx.strokeStyle ="purple";
ctx.stroke();

//LINEAS

ctx.beginPath();
ctx.moveTo(26,24); //x1,y1
ctx.lineTo(200,200);
ctx.lineTo(400,200); //x2,y2
ctx.lineTo(600,400);
ctx.lineTo(800,200);
ctx.lineTo(1000,200);
ctx.lineTo(1000,26);
ctx.lineWidth=5;
ctx.stroke();

//relleno de linea

ctx.fillStyle = "rgba(0,0,255,.6)";
ctx.fill();

//CURVAS
ctx.beginPath();
ctx.moveTo(26,500);
ctx.bezierCurveTo(200,300,400,400,500,500);
//contorno Curva
ctx.lineWidth = 5;
ctx.strokeStyle = "rgba(100,0,0,1)";
ctx.stroke();
//relleno Curva
ctx.fillStyle = "rgba(255,0,0,1)";
ctx.fill();

//DEGRADADOS 
// ctx.createLinearGradient(x1,y1,x2,y2)
var grd = ctx.createLinearGradient(26,300,100,300); //de arriba a abajo, si quiero de izquierda a derecha tengo que poner (26,300,0,300), si quiero en diagonal (26,300,0,400)
grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");
ctx.fillStyle = grd;
ctx.fillRect(26,300,100,100);*/

// ctx.createLinearGradient(x1,y1,r,x2,y2,r2) para circulos

