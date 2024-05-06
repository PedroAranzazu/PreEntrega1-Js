let turno = 1;

function asignarTurno() {
    let nombre = prompt("Ingrese su nombre para su turno");
    if (nombre === null) {
        return null;
    }
    alert(nombre + " tu turno es " + turno);
    turno++;
    console.log(typeof(nombre));
}

while (true) {
    let resultado = asignarTurno();
    if (resultado === null) {
        break;
    }
}