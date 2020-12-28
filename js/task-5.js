// 1. Перевести рядок в нижній регістр
// 2. Перевірити рядок на слова: spam, sale.
// 3. Якщо знайшли слово - вивожу true в ін. випадку - false

const checkForSpam = message => {
  message = message.toLowerCase();
  const result =
    message.includes('spam') || message.includes('sale') ? 'true' : 'false';
  return result;
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
