var arrayNum: number[] = [30, 44, 55, 22, 44, 11, 60];
const filterArrNum: number[] = arrayNum.filter((element) => element > 40);
console.table(filterArrNum);

// function isBigger(arg: number) {
//   return arg > 40;
// }
// const filterArrNum: number[] = arrayNum.filter(isBigger);
// console.table(filterArrNum);
