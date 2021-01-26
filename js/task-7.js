const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

//func 1
const isLoginValid = login => {
  return login.length >= 4 && login.length <= 16 ? true : false;
};

//func 2
const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login) ? false : true;
};

// func 3
const addLogin = (allLogins, login) => {
  const loginValid = isLoginValid(login);
  if (!loginValid) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  const loginUnique = isLoginUnique(allLogins, login);
  if (!loginUnique) {
    return 'Такой логин уже используется!';
  }

  allLogins.push(login);
  return 'Логин успешно добавлен';
};

// * Вызовы функции для проверки работоспособности твоей реализации.
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'Google')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
