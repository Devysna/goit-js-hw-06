//Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість
// font-size. В результаті, перетягуючи повзунок, буде змінюватися 
//розмір тексту.



const inputSize = document.querySelector('#font-size-control');
const textAbracadabra = document.querySelector('#text');

textAbracadabra.style.fontSize = `${inputSize.value}px`;

inputSize.addEventListener('change', event => {
    textAbracadabra.style.fontSize = `${event.target.value}px`;
});