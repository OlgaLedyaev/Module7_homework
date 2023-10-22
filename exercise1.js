const user = {
  name: "Olga",
  age: 35,
  city: "Eilat",
};

function keyValue(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} - ${obj[key]}`);
    }
  }
}
keyValue(user);
