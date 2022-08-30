const arrayNum: number[] = [30, 44, 55, 22, 44, 11];
const foundArrNum = arrayNum.find((element) => element > 44);
console.log(foundArrNum);

const arrayString: string[] = ["Banana", "Apple", "Strawberry"];
const foundArrStr = arrayString.findIndex((element) => element === "Apple");
console.log(foundArrStr);

const filterArrNum: number[] = arrayNum.filter((element) => element > 40);
console.table(filterArrNum);

// function isBigger(arg: number) {
//   return arg > 40;
// }
// const filterArrNum: number[] = arrayNum.filter(isBigger);
// console.table(filterArrNum);
