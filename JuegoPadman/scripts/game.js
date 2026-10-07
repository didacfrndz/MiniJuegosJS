import { matriz } from './render.js';
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



//funcion para recorrer el tablero y mostrar los elementos en la consola
function recorrerMatriz() {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(`Elemento en la posición [${i}][${j}]: ${matriz[i][j]}`);
        }
    }
}

//colocar enemigos en la matriz
enemigos.forEach(enemigo => {
    if(enemigo.vivo) {
        matriz[enemigo.f][enemigo.c] = 1;
    }
});

//colocar jugador en la matriz

if(player.vivo) {
    matriz[player.f][player.c] = 2;
}
recorrerMatriz();
//funcion para dibujar el tablero en el HTML
function dibujarTablero() {
    let tableroHTML = '';
    for (let i = 0; i < matriz.length; i++) {
        tableroHTML += '<div class="fila">';
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === 0) {
                tableroHTML += '<div class="celda"></div>';
            } else if (matriz[i][j] === 1) {
                tableroHTML += '<div class="celda enemigo">1</div>';
            } else if (matriz[i][j] === 2) {
                tableroHTML += '<div class="celda jugador">2</div>';
            }
        }
        tableroHTML += '</div>';
    }
    div.innerHTML += tableroHTML;
}

dibujarTablero();
