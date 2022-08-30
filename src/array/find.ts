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

const index = arrBlockchain.findIndex((obj) => {
  return obj.blockchain == "Polygon";
});
console.log(index);

//find multiple object
const all = arrBlockchain.filter((obj, index, arr) => {
  return obj.blockchain === "Polygon";
});

console.log(all);
