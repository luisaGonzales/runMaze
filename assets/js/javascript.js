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
var reset = [];
var win = [];

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
                reset.push(i);
                reset.push(j);
                celda.setAttribute('class', 'init');
            } else if (mapa[i][j] == "W") {
                win.push(i);
                win.push(j);
                celda.setAttribute('class', 'final');
            }
            celda.setAttribute("id", i + "," + j)
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
    startFunction();
}

moveUp.onclick = function () {
    moveUpFunction();
    gameWin();
}

moveDown.onclick = function () {
    moveDownFunction();
    gameWin();
}

moveRigth.onclick = function () {
    moveRigthFunction();
    gameWin();
}

moveLeft.onclick = function () {
    moveLeftFunction();
    gameWin();
}

function startFunction() {
    if ((posI != reset[0]) || (posJ != reset[1])) {
        var temp1 = posI + "," + posJ;
        document.getElementById(temp1).setAttribute("class", "space");
        posI = reset[0];
        posJ = reset[1];
    }
    var temp0 = reset[0] + "," + reset[1];
    document.getElementById(temp0).setAttribute("class", "up");
}

function moveUpFunction() {
    if (mapa[(posI - 1)][posJ] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = (posI - 1) + "," + posJ;
        document.getElementById(temp0).setAttribute("class", "space");
        document.getElementById(temp1).setAttribute("class", "up");
        posI--;
    }
}

function moveDownFunction() {
    if (mapa[(posI + 1)][posJ] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = (posI + 1) + "," + posJ;
        document.getElementById(temp0).setAttribute("class", "space");
        document.getElementById(temp1).setAttribute("class", "down");
        posI++;

    }
}

function moveRigthFunction() {
    if (mapa[posI][posJ + 1] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = posI + "," + (posJ + 1);
        document.getElementById(temp0).setAttribute("class", "space");
        document.getElementById(temp1).setAttribute("class", "rigth");
        posJ++;

    }
}

function moveLeftFunction() {
    if (mapa[posI][posJ - 1] != "*") {
        var temp0 = posI + "," + posJ;
        var temp1 = posI + "," + (posJ - 1);
        document.getElementById(temp0).setAttribute("class", "space");
        document.getElementById(temp1).setAttribute("class", "left");
        posJ--;
    }
}

function gameWin() {
    if ((posI == win[0]) && (posJ == win[1]) && (posI != undefined) && (posJ != undefined)) {
        return (alert("Ganaste!!"));
    }
}