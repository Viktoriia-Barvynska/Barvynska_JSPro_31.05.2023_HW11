//=================HW11==================
/* Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
Наприклад:
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
*/
const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};
/*шукаємо елемент в масиві; використовуємо метод splice для видалення одного елемента з масиву за вказаним індексом. */
removeElement(array, 5);
console.log(array);