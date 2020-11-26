// 1. Рядок переробити в масив
// 2. Присвоїти в змінну найдовше слово перший елемент масиву
// 3. Порівняти довжину з наступним елементом

const findLongestWord = function(string) {
    let array;
    let longestWord;

    array = string.split(' ');
    longestWord = array[0];
    
    for (let i = 1; i < array.length; i += 1) {
        if (longestWord.length < array[i].length) {
                longestWord = array[i];
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