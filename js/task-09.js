//Напиши скрипт, який змінює кольори фону елемента <body> 
//через інлайн-стиль по кліку на button.change-color і виводить
// значення кольору в span.color.

//Для генерування випадкового кольору використовуй функцію 
//getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonChangeColor = document.querySelector('.change-color');
const bodyChangeColor = document.querySelector('body');
const numberColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', event => {
  let newColor = getRandomHexColor();
  bodyChangeColor.style.backgroundColor = newColor;
  numberColor.textContent = newColor;
});