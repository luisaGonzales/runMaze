var M = [
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


var tablero = document.getElementById('tablero');
var tabla = document.createElement('table');

for (var i = 0; i < M.length; i++) {
    var fila = document.createElement('tr');
    for (var j = 0; j < M[i].length; j++) {
        var celda = document.createElement('td');
        if (M[i][j] == "*") {
            celda.setAttribute('class', 'block');
        } else if (M[i][j] == "_"){
            celda.setAttribute('class','space')
        } else if (M[i][j] == "o"){
            celda.setAttribute('id', 'init' );
        } else if (M[i][j] == "W"){
            celda.setAttribute('id', 'final');
        }
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
}
tablero.appendChild(tabla);
