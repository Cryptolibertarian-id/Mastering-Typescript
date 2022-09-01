var arrayString: string[] = ["Banana", "Apple", "Strawberry", "Apple"];
console.time("Find Index");
const foundArrStr: number = arrayString.findIndex(
  (element) => element === "Apple"
);
console.log(foundArrStr); //1
console.timeEnd("Find Index");

console.time("Index Of");
const resIndexOf: number = arrayString.indexOf("Apple");
console.log(resIndexOf);
console.timeEnd("Index Of");
