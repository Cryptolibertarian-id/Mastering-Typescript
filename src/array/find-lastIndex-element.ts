var arrayString: string[] = ["Banana", "Apple", "Strawberry", "Apple"];
console.time("Find Last Index");
const foundArrStr: number = arrayString.findLastIndex(
  (element) => element === "Apple"
);
console.log(foundArrStr); //1
console.timeEnd("Find Last Index");

console.time("Last Index Of");
const resLastIndexOf: number = arrayString.lastIndexOf("Apple");
console.log(resLastIndexOf);
console.timeEnd("Last Index Of");
