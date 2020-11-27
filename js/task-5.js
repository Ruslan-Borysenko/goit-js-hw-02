// 1. Перевести рядок в нижній регістр
// 2. Перевірити рядок на слова: spam, sale.
// 3. Якщо знайшли слово - вивожу true в ін. випадку - false

const checkForSpam = function (message) {
  message = message.toLowerCase();
  const result =
    message.includes('spam') || message.includes('sale') ? 'true' : 'false';
  console.log(result);
};

checkForSpam('Latest technology news'); // false
checkForSpam('JavaScript weekly newsletter'); // false
checkForSpam('Get best sale offers now!'); // true
checkForSpam('[SPAM] How to earn fast money?'); // true
