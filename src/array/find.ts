const arrBlockchain = [
  { id: 1, blockchain: "Polygon" },
  { id: 2, blockchain: "Polkadot" },
  { id: 3, blockchain: "Bitcoin" },
  { id: 4, blockchain: "Polygon" },
];

//find first object
const first = arrBlockchain.find((obj) => {
  return obj.id === 2;
});
console.log(first);

//find multiple object
const all = arrBlockchain.filter((obj) => {
  return obj.blockchain === "Polygon";
});

console.log(all);
