const arrayNum: number[] = [30, 44, 55, 22, 44, 11];
const foundArrNum = arrayNum.find((element) => element > 44);
console.log(foundArrNum);

const arrayString: string[] = ["Banana", "Apple", "Strawberry"];
const foundArrStr = arrayString.findIndex((element) => element === "Apple");
console.log(foundArrStr);
