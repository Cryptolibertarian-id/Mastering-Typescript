type order = {
  id: string;
  order_type: string;
  price: number;
  quantity: number;
};

let order1 = {
  id: "1",
  order_type: "bid",
  price: 102.55,
  quantity: 24.0,
};
console.table([order1, order1, order1]);
console.log(Date.now());
