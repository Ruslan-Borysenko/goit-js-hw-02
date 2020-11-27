// 1. Обрізати рядок до 40 символів
// 2. Додати "..."
// 3. Повернути нову/стару версію

const formatString = function (string) {
    if (string.length > 40) {
        const newString = string.slice(0, 40).concat('...');
        console.log(newString);
    } else {
        console.log(string);
    }
}

formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');