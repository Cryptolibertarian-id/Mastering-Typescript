const blockchain: {
  name: string;
  creator: string;
  totalCoin: number;
} = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

type TBlockchain = {
  name: string;
  creator: string;
  totalCoin: number;
};

const Type_bitcoin: TBlockchain = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

interface IBlockchain {
  name: string;
  creator: string;
  totalCoin: number;
}

const Interface_bitcoin: IBlockchain = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

console.log(typeof blockchain); //object
console.log(blockchain);

console.log(typeof Interface_bitcoin); //object
console.log(Interface_bitcoin);

console.log(typeof Type_bitcoin); //object
console.log(Type_bitcoin);

console.log(Interface_bitcoin == Type_bitcoin); //false
console.log(Interface_bitcoin === Type_bitcoin); //false
