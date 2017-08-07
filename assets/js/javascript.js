var mapa = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];

var posI;
var posJ;

function getMaze(mapa) {
    var tablero = document.getElementById('tablero');
    var tabla = document.createElement('table');

    for (var i = 0; i < mapa.length; i++) {
        var fila = document.createElement('tr');
        for (var j = 0; j < mapa[i].length; j++) {
            var celda = document.createElement('td');
            if (mapa[i][j] == "*") {
                celda.setAttribute('class', 'block');
            } else if (mapa[i][j] == "_") {
                celda.setAttribute('class', 'space')
            } else if (mapa[i][j] == "o") {
                posJ = j;
                posI = i;
                celda.setAttribute('class', 'init');
            } else if (mapa[i][j] == "W") {
                celda.setAttribute('class', 'final');
            }
            celda.setAttribute("id", i + "," + j)
            var div = document.createElement("div");
            div.setAttribute("class", "flechas");
            celda.appendChild(div);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    tablero.appendChild(tabla);
}
//Traemos botones
var placeMaze = document.getElementById("placeMaze");
var start = document.getElementById("start");
var moveLeft = document.getElementById("moveLeft");
var moveRigth = document.getElementById("moveRigth");
var moveUp = document.getElementById("moveUp");
var moveDown = document.getElementById("moveDown");
//Función para poder dibujar diversos mapas futuros y tener muchos más mapas
var contador = 0;
placeMaze.onclick = function () {
    contador++;
    if (contador == 1) {
        getMaze(mapa);
    }
}

start.onclick = function () {
    var contInicio = 1;
    var temp0 = posI + "," + posJ;
    document.getElementById(temp0).innerHTML = "";
    
    //var img = document.createElement("img");
    //img.src = "../images/up.png";
    var img = "*";
    var celdaInit = document.getElementsByClassName("init");
    if (contInicio == 1) {
        celdaInit[0].innerHTML = img;
    }
    posI = 9;
    posJ = 1;
}

var count = 0;
moveUp.onclick = function () {
    var imgUp = "^";
    if (mapa[(posI - 1)][posJ] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = (posI - 1) + "," + posJ;
        document.getElementById(temp0).innerHTML = "";
        document.getElementById(temp1).innerHTML = imgUp;
        posI--;
    }
}

moveDown.onclick = function () {
    var imgDown = "-";
    if (mapa[(posI + 1)][posJ] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = (posI + 1) + "," + posJ;
        document.getElementById(temp0).innerHTML = "";
        document.getElementById(temp1).innerHTML = imgDown;
        posI++;
    }
}

moveRigth.onclick = function () {
    var imgRigth = ">";
    if (mapa[posI][posJ + 1] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = posI + "," + (posJ + 1);
        document.getElementById(temp1).innerHTML = imgRigth;
        document.getElementById(temp0).innerHTML = "";
        posJ++;
    }
}

moveLeft.onclick = function () {
    var imgLeft = "<";
    if (mapa[posI][posJ - 1] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = posI + "," + (posJ - 1);
        document.getElementById(temp1).innerHTML = imgLeft;
        document.getElementById(temp0).innerHTML = "";
        posJ--;
    }
}

var celdaInicial = document.getElementById("9,1")
var celdaFinal = document.getElementById("9,16");
var final = document.getElementById(posI + "," + posJ);
if((celdaFinal == final) && (final != celdaInicial )){
    alert("Ganaste!!");
}