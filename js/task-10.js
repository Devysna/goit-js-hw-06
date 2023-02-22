//Напиши скрипт створення і очищення колекції елементів. 

//Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція. Натисненням на кнопку
// Очистити, колекція елементів очищається.
//
//Створи функцію createBoxes(amount), яка приймає один параметр - 
//число. Функція створює стільки <div>, скільки вказано в amount і
// додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від
// попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання
// кольору.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputNumber = document.querySelector('#controls>input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const createdBoxes = document.querySelector('#boxes');

const createBoxes = amount => {

    const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.background = getRandomHexColor();
        div.style.height = `${30 + 10 * i}px`;
        div.style.width = `${30 + 10 * i}px`;
        
        newBoxes.push(div);
  };
    return newBoxes;
};

const destroyBoxes = () => {
    createdBoxes.innerHTML = ''
};

buttonCreate.addEventListener('click', () => {
    let boxesToAdd = createBoxes(inputNumber.value)
    createdBoxes.append(...boxesToAdd)
});

console.log(inputNumber.value);

buttonDestroy.addEventListener('click', () => {
    destroyBoxes.call()
});