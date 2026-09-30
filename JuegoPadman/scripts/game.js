import { tablero } from './render.js';
import { enemigos } from './enemy.js';
import { player } from './player.js';
const div = document.querySelector(`#contenedor`);

const explicacion = `<div>
        <div>
            <h1>PADMAN</h1>
            <p>¡Come todos los enemigos para ganar!</p>
        </div>
        <div class="explicacion">
            <h2>¡Bienvenido a Padman!</h2>
            <p>Usa las flechas del teclado para moverte come todos los (foto fantasma) para ganar </p>
            <p>¡Ganas puntos por tiempo y subes de nivel cada 30s!</p>
            <button id="startButton">INICIAR JUEGO</button>
        </div>
    </div>`;

div.innerHTML = explicacion;

console.log(tablero);

function recorrerTablero() {
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            console.log(`Elemento en la posición [${i}][${j}]: ${tablero[i][j]}`);
        }
    }
}

function dibujarTablero() {

    let tableroHTML = `<div class="tablero">`;

    for (let i = 0; i < tablero.length; i++) {

        tableroHTML += `<div class="fila">`;

        for (let j = 0; j < tablero[i].length; j++) {
            tableroHTML += `<div class="celda"></div>`;
        }

        tableroHTML += `</div>`;
    }

    tableroHTML += `</div>`;

    div.innerHTML += tableroHTML;
}

dibujarTablero();
