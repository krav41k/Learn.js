'use stict';
let user = {
    name: "John",
    age: 30
};
// user.isAdmin = true;
// delete user.age;
// alert(user.isAdmin);
// alert(user.age);

let key = prompt("Что вы хотите узнать о пользователе?", "name");

// доступ к свойству через переменную
alert( user[key] ); // John (если ввели "name")

function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ...другие свойства
    };
  }
  
  user = makeUser("John", 30);
  alert(user.name); // John

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
    for (let key in obj){
        typeof(obj[key]) === "number" ? obj[key] = obj[key]*2: OfflineAudioCompletionEvent;
    }
    for (let key in obj){
        alert(obj[key]);
    }
  }
  multiplyNumeric(menu);