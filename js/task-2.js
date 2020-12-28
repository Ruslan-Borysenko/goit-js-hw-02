// 1. Порахувати к-ть слів в рядку
// 2. К-ть слів помножити на визначене число
// 3. Вивести результат множення

const calculateEngravingPrice = (message, pricePerWord) => {
  const wordArrayLength = message.split(' ').length;
  const result = pricePerWord * wordArrayLength;
  return result;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);
