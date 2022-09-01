type order = {
  id: string;
  order_type: string;
  price: number;
  quantity: number;
  timestamp: number;
};

let bidOrder1: order = {
  id: "1",
  order_type: "bid",
  price: 102.55,
  quantity: 24.0,
  timestamp: Date.now(),
};

let bidOrder2: order = {
  id: "2",
  order_type: "bid",
  price: 101.87,
  quantity: 32.0,
  timestamp: Date.now(),
};

let bidOrder3: order = {
  id: "3",
  order_type: "bid",
  price: 101.48,
  quantity: 293.0,
  timestamp: Date.now(),
};

let bidOrder4: order = {
  id: "4",
  order_type: "bid",
  price: 101.48,
  quantity: 293.0,
  timestamp: Date.now(),
};

var bidArray: order[] = [bidOrder3, bidOrder1, bidOrder2, bidOrder4];

console.table(bidArray);
// const filtered = bidArray.filter((obj) => {
//   return obj.price == 101.48;
// });
// console.log(filtered);

// Sorting
// bidArray.sort((a, b) => {
//   return b.price - a.price;
// });

// console.table(bidArray);
