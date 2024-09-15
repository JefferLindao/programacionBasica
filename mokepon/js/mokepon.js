let ataqueJugador
let ataqueEnemigo
function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota")
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJudador)

  let botonFuego = document.getElementById("boton-fuego")
  botonFuego.addEventListener('click', ataqueFuego)
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.addEventListener('click', ataqueAgua)
  let botonTierra = document.getElementById("boton-tierra")
  botonTierra.addEventListener('click', ataqueTierra)

}

function seleccionarMascotaJudador() {
  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')
  let spanMascotaJugador = document.getElementById('mascota-jugador')
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge'
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo'
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya'
  } else {
    alert('Seleccionar una mascota')
  }
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3)
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO"
  ataquAlearioEnemigo()
}
function ataqueAgua() {
  ataqueJugador = "AGUA"
  ataquAlearioEnemigo()
}
function ataqueTierra() {
  ataqueJugador = "TIERRA"
  ataquAlearioEnemigo()
}

function ataquAlearioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3)
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO"
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA"
  } else {
    ataqueEnemigo = "TIERRA"
  }
  crearMensaje()
}

function crearMensaje() {
  let secctionMensaje = document.getElementById("mensajes")
  let parrafo = document.createElement("p")
  parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " - GANASTE 🎉"
  secctionMensaje.appendChild(parrafo)
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)