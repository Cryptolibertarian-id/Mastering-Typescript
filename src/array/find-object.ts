interface crypto {
  id: number;
  blockchain: string;
  price: number;
}

const arrCrypto: crypto[] = [
  { id: 1, blockchain: "Polygon", price: 550 },
  { id: 2, blockchain: "Polkadot", price: 770 },
  { id: 3, blockchain: "Bitcoin", price: 1520 },
  { id: 4, blockchain: "Polygon", price: 340 },
];

//find first object
const first = arrCrypto.find((obj) => {
  return obj.blockchain == "Polygon";
});
console.log(first);
