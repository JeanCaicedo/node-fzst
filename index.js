/*let username = "Jean";
let age = 20;
let hasHobbies = false;
let points = [10, 20, 30];
let user = {
  name: "Ryan",
  lastNamer: "Rio",
};

const PI = 3.14;

console.log(username);
console.log(age);
console.log(hasHobbies);
console.log(points);
console.log(user);
console.log(PI);*/

const names = ["Jean", "Johann", "Sofi"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

function showUserInfo(userNamer, userAge) {
  return "El usuario es ${userName}, la edad del usuario es ${userAge}";
}

console.log(showUserInfo("Joe", 30));
console.log(showUserInfo("MMaria", 40));
