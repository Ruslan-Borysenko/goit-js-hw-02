// 1. Обрізати рядок до 40 символів
// 2. Додати "..."
// 3. Повернути нову/стару версію

const formatString = string => {
  // if (string.length > 40) {
  //   const newString = string.slice(0, 40).concat('...');
  //   return newString;
  // } else {
  //   return string;
  // }
  return string.length > 40 ? string.slice(0, 40).concat('...') : string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
