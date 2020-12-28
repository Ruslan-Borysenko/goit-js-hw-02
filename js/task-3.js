// 1. Рядок переробити в масив
// 2. Присвоїти в змінну "longestWord" перший елемент масиву
// 3. Порівняти довжину з наступним елементом

const findLongestWord = string => {
  const array = string.split(' ');
  let longestWord = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
