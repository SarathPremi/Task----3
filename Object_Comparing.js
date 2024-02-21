function compareObjects(obj1, obj2) {
  //let obj1 = { name: "Sarath", age: 31, place: "Madurai" }
  //let obj2 = { age: 31, city = "Madurai", place: "Madurai" }
  let isSame = true;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
        isSame = false;
        console.log(key + "does not have Same Value");
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
    { name: "Sarath", age: 31, place: "Madurai" },
    { age: 31, city: "Madurai", place: "Madurai" } ? "Same" : "Different"
  )
);
