// 1. Введення числа юзером в prompt;
// 2. Запис значення в інпут;
// 3. Перевірити значення на число;
// 4. Якщо число записати в масив чисел;
// 4. Якщо не число вивести повідомлення "Было введено не число, попробуйте еще раз";
// 5. Знову пропонується ввести число;
// 6. Припинити введення при натисканні на cancel;
// 7. Порахувати суму введених чисел та записати в total;
// 8. Вивести результат: 'Общая сумма чисел равна [сумма]';

let input;
const numbers = [];
let total = 0;

// for (;;) {
while (true) {
  let input = Number(prompt('Введите число:'));
  const isNumber = Number.isNaN(input);

  if (!isNumber) {
    numbers.push(input);
  }
  if (isNumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  if (!input) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    console.log(`Общая сумма чисел равна ${total}`);
    console.log(numbers);
    break;
  }
}
