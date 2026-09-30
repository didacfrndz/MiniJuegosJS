const contenedor = document.querySelector(`#contenedor`);
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(`Número aleatorio: ${numeroAleatorio}`);
contenedor.innerHTML= `
<div class="container">
    <div >
        <h1 >Adivina el número</h1>
        <p>Elige un número entre 1 y 100</p>
    </div>
    <div class="">
        <form id="">
            <div class="">
                <input type="number"  class="" id="numero" placeholder="Ingresa tu número">
            </div>
            <button type="submit" class="">Adivinar</button>
        </form>
    </div>
    <div class="">
        <p id="resultado" class=""></p>
    </div>
</div>
`;
const numeroInput = document.querySelector(`#numero`);
const resultado = document.querySelector(`#resultado`);
const form = document.querySelector(`form`);
contenedor.addEventListener(`submit`, (e) => {
    e.preventDefault();
    const numeroIngresado = parseInt(numeroInput.value);    
    if (numeroIngresado < 1 || numeroIngresado > 100) {
        resultado.textContent = `Por favor, ingresa un número entre 1 y 100.`;
        return;
    }
    else if (numeroIngresado === numeroAleatorio) {
        resultado.textContent = `¡Felicidades! Adivinaste el número ${numeroAleatorio}.`;
    }
    else if (numeroIngresado < numeroAleatorio) {
        resultado.textContent = `El número es mayor que ${numeroIngresado}.`;
    }
    else {
        resultado.textContent = `El número es menor que ${numeroIngresado}.`;
    }
});


