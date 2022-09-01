import { bidArray, askArray } from "./orderbook";
import { peekBidPrice } from "./function";

console.table(bidArray);
console.log(peekBidPrice(bidArray));
//Sorting
console.time("Bid Order Sorting");
bidArray.sort((a, b) => {
  return b.price - a.price;
});
console.timeEnd("Bid Order Sorting");
console.log(peekBidPrice(bidArray));

//console.table(bidArray);
// const filtered = bidArray.filter((obj) => {
//   return obj.price == 101.48;
// });
// console.log(filtered);
