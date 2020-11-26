// 1. Рядок переробити в масив
// 2. Присвоїти в змінну найдовше слово перший елемент масиву
// 3. Порівняти довжину з наступним елементом

const findLongestWord = function(string) {
    let array;
    let longestWord;
    // для меншого об'єму коду раджу відразу об'являти змінну і присвоювати їй значення
    //тобто замість двох стрічок 
    //let array;
    //array = string.split(' ');
    //пиши одну let array = string.split(' ');
    // і тут правильніше не let array, а const array, бо масив в тебе не міняється за час виконання функції
    array = string.split(' ');
    longestWord = array[0];
    console.log(array.length);
    console.log(array[1].length);
    console.log(longestWord.length);

    for (let i = 0; i < array.length; i += 1) {
        if (longestWord.length >= array[i + 1].length) {
            //виведи в консоль.лог array[i + 1] і зрозумієш в чому помилка. Треба просто array[i]. 
            //Помилка може бути через те, що при останній ітерації циклу ти хочеш отримати елемент, якого не існує через array[i + 1] 
            continue;
            } else {
                longestWord = array[i + 1];
            }
        }
    console.log(longestWord);
};

findLongestWord('Google do a roll');



// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'
