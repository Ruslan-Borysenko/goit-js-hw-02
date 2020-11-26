// 1. Рядок переробити в масив
// 2. Присвоїти в змінну "найдовше слово" перший елемент масиву
// 3. Порівняти довжину з наступним елементом

const findLongestWord = function(string) {
    const array = string.split(' ');
    let longestWord = array[0];
    
    for (let i = 1; i < array.length; i += 1) {
        if (longestWord.length < array[i].length) {
                longestWord = array[i];
        }
    }
    console.log(i + 1);
    console.log(longestWord);
}

findLongestWord('The quick brown fox jumped over the lazy dog');
findLongestWord('Google do a roll');
findLongestWord('May the force be with you');
