//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, 
//тобто елементів li.item.

//Для кожного элемента li.item у списку ul#categories, знайде і 
//виведе в консоль текст заголовку елемента (тегу <h2>) і кількість 
//елементів в категорії (усіх <li>, вкладених в нього).

const categoriesItemRef = categories.querySelectorAll('.item');
console.log('Number of categories:',categoriesItemRef.length);

categoriesItemRef.forEach(item => {
       console.log('Category:',item.firstElementChild.textContent);
       console.log('Elements:',item.lastElementChild.children.length)
    });
