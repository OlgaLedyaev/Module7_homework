function objWithoutProto() {
  return Object.create(null);
}

const newObj = objWithoutProto();
console.log(newObj);
