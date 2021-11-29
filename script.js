const pixelBoard = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const colorPalette = document.getElementById('color-palette')

const btnGenerate = document.getElementById('generate-board');
const inputSize = document.getElementById('board-size');

// Criacao da tela de pixels
function boardPadrao () {
for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'pixel-row';
    // eslint-disable-next-line no-shadow
    for (let i = 0; i < 5; i += 1) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel default';
        row.appendChild(pixel);
        pixelBoard.appendChild(row);
    }
    }
}
// eslint-disable-next-line max-lines-per-function
function boardUser() {
   pixelBoard.innerHTML = '';
    let tamanho = inputSize.value;
    if (inputSize.value == '') {
        alert('Board inválido!');
    } else if (inputSize.value < 5) {
        tamanho = 5;
    } else if (inputSize.value > 50) {
        tamanho = 50;
    }
    for (let i = 0; i < tamanho; i += 1) {
        let row = document.createElement('div');
        row.className = 'pixel-row';
        for (let i = 0; i < tamanho; i += 1) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel default';
            row.appendChild(pixel);
            pixelBoard.appendChild(row);
        }
  }
  adicionaEventos();
}
boardPadrao();
btnGenerate.addEventListener('click', boardUser);

// Selecao de cores
let corUm = document.getElementById('cor1');
corUm.style.backgroundColor = 'black'
let corDois = document.getElementById('cor2');
corDois.style.backgroundColor = 'green'
let corTres = document.getElementById('cor3');
corTres.style.backgroundColor = 'red'
let corQuatro = document.getElementById('cor4');
corQuatro.style.backgroundColor = 'blue'

function selectColor (event) {
    for (let i of colors) {
        i.classList.remove('selected');
    }
    event.target.classList.add('selected');
}
colorPalette.addEventListener('click', selectColor);

// Colorindo Pixels
let pixels = document.getElementsByClassName('pixel');
function coloredPixels (event) {
    let selected = document.querySelector('.selected');
    let color = selected.style.backgroundColor;
    event.target.style.backgroundColor = color;
    console.log(event.target);
}
function adicionaEventos () {
   for (let i = 0; i < pixels.length; i +=1) {
    pixels[i].addEventListener('click', coloredPixels);
} 
}
adicionaEventos();


// Resetando Pixels
let btnClear = document.getElementById('clear-board');
function resetPixels () {
    for (let i of pixels) {
        i.style.backgroundColor = 'white';
    }
}
btnClear.addEventListener('click', resetPixels);

window.onload = function () {
    colors[0].classList.add('selected');

    // Gerar cores automaticamente
    // Referencia para gerar um numero aleatorio:
    // https://www.w3schools.com/js/js_random.asp
    function geradorDeCores () {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;
        let rgb = `rgb(${r}, ${g}, ${b})`;
        return rgb;
    }
    function setaCores () {
        for (let i = 1; i < colors.length; i += 1) {
            colors[i].style.backgroundColor = geradorDeCores();
        }
    }
    setaCores();
} 