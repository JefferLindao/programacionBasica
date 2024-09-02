
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
  let resultado = ""
  if (jugada == 1) {
    resultado = "Elegiste piedra"
  }
  else if (jugada == 2) {
    resultado = "Elegiste papel"
  }
  else if (jugada == 3) {
    resultado = "Elegiste tijera"
  } else {
    resultado = "Mal elegido"
  }
  return resultado
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfo = 0
let perdidas = 0
while (triunfo < 3 && perdidas < 3) {
  pc = aleatorio(1, 3)
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para piedra:")
  //alert("Elegiste "+jugador)
  alert("PC elige: " + eleccion(pc))
  alert("Tu eliges: " + eleccion(jugador))

  //combate
  if (pc == jugador) {
    alert("Empate")
  }
  else if (jugador == 1 && pc == 3) {
    alert("Ganaste")
  }
  else if (jugador == 2 && pc == 1) {
    alert("Ganaste")
  } else if (jugador == 3 && pc == 2) {
    alert("Ganaste")
  } else {
    alert("Perdiste")
  }
}