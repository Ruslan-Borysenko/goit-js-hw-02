let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

//func 1
const isLoginValid = function (login) {
  const result = login.length >= 4 && login.length <= 16 ? true : false;
  return result;
};

//func 2
const isLoginUnique = function (allLogins, login) {
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins[i] === login) {
      return false;
    }
  }
  return true;
};

// func 3
const addLogin = function (allLogins, login) {
  let result;
  // start func 1
  const loginValid = isLoginValid(login);

  if (loginValid === false) {
    result = 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  // start func 2
  const loginUnique = isLoginUnique(allLogins, login);
  if (loginUnique === false) {
    result = 'Такой логин уже используется!';
  } else {
    logins.push(login);
    result = 'Логин успешно добавлен';
  }
  return result;
};

// * Вызовы функции для проверки работоспособности твоей реализации.
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
