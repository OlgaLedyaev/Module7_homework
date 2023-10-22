const user = {
  name: "Olga",
  age: 35,
  city: "Eilat",
};

function checkPropeptyName(str, obj) {
  return str in obj;
}

console.log(checkPropeptyName("city", user));
console.log(checkPropeptyName("country", user));
