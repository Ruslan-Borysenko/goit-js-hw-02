// 1. Порахувати к-ть слів в рядку
// 2. К-ть слів помножити на визначене число
// 3. Вивести результат множення

const calculateEngravingPrice = function (message, pricePerWord) {
    message = (message.split(' ').length);
    let result;
    console.log(result = pricePerWord * message);
    //----я б так написав. Так більш читабельно
    //const wordArray = message.split(' '); //так в самій назві зрозуміло, що створено масив зі слів. Перевизначати змінні можна і Репета так часом робитиме, але потім він скаже, що так робити не варто, бо через це часом при винекненні помилки в коді важко зрозуміти яка змінна дає збій
    //const wordArrayLength = wordArray.length;
    //const result = pricePerWord * wordArrayLength;
    //console.log(result);
    //так легше читається код. Іншій людині легше розібратись, що ти написав)
}

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20); 
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40); 
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20); 


