// 1. Порахувати к-ть слів в рядку
// 2. К-ть слів помножити на визначене число
// 3. Вивести результат множення

const calculateEngravingPrice = function (message, pricePerWord) {
    const wordArrayLength = (message.split(' ').length);
    const result = pricePerWord * wordArrayLength;
    console.log(result);
}

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20); 
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); 
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); 


