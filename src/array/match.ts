type order = {
  id: string;
  order_type: string;
  price: number;
  quantity: number;
  timestamp: number;
};

let order1: order = {
  id: "1",
  order_type: "bid",
  price: 102.55,
  quantity: 24.0,
  timestamp: Date.now(),
};

let order2: order = {
  id: "2",
  order_type: "bid",
  price: 101.87,
  quantity: 32.0,
  timestamp: Date.now(),
};

let order3: order = {
  id: "3",
  order_type: "bid",
  price: 101.48,
  quantity: 293.0,
  timestamp: Date.now(),
};

const bidArray: order[] = [order3, order1, order2];

console.table(bidArray);