function compareObjects(obj1, obj2) {
  let isSame = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
         isSame = false;
        console.log(key + " does not have same value");
      }
    }
  } else {
    isSame = false;
    console.log("Objects length are different");
  }
  return isSame;
}

console.log(
  compareObjects(
    { name: "Sarath", place: "Madurai", age: 31 },
    { place: "Madurai", name: "Sarath" }
  )
    ? "Same"
    : "Different"
);
