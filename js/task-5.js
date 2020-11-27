// 1. Перевести рядок в нижній регістр
// 2. Перевірити рядок на слова: spam, sale.
// 3. Якщо знайшли слово - вивожу true в ін. випадку - false


const checkForSpam = function (message) {
    const word1 = message.toLowerCase().indexOf('spam');
    const word2 = message.toLowerCase().indexOf('sale');
    if (word1 === -1 && word2 === -1) {
        console.log('false');
    } else {
        console.log('true');
    }
};

checkForSpam('Latest technology news'); // false
checkForSpam('JavaScript weekly newsletter'); // false
checkForSpam('Get best sale offers now!'); // true
checkForSpam('[SPAM] How to earn fast money?'); // true


