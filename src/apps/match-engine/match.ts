import { bidArray, askArray } from "./orderbook";
import { getSpread, getMidPoint } from "./function";

//Sorting
console.time("Bid Order Sorting");
bidArray.sort((a, b) => {
  return b.price - a.price;
});
console.timeEnd("Bid Order Sorting");
console.table(bidArray);

console.time("Ask Order Sorting");
askArray.sort((a, b) => {
  return a.price - b.price;
});
console.timeEnd("Ask Order Sorting");
console.table(askArray);

console.log(`Spread : ${getSpread(bidArray, askArray)}`);
console.log(`Middle Point : ${getMidPoint(bidArray, askArray)}`);

//console.table(bidArray);
// const filtered = bidArray.filter((obj) => {
//   return obj.price == 101.48;
// });
// console.log(filtered);
