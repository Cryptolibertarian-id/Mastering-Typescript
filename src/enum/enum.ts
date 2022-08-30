const blockchain = {
  Bitcoin: "Bitcoin",
  Ethereum: "Ethereum",
  Polkadot: "Polkadot",
  Polygon: "Polygon",
  Solana: "Solana",
};

console.log(blockchain); // Get All Properties
console.log(blockchain.Bitcoin); //Access Enum properties

const NBlockchain = {
  Bitcoin: 0,
  Ethereum: 1,
  Polkadot: 2,
  Polygon: 3,
  Solana: 4,
};

0 == NBlockchain.Bitcoin ? console.log(true) : console.log(false); //true
1 == NBlockchain.Bitcoin ? console.log(true) : console.log(false); //false

const Satoshi1 = Symbol("Satoshi Nakamoto");
const Satoshi2 = Symbol("Satoshi Nakamoto");

const SymBlockchain = {
  Bitcoin: Symbol("Bitcoin"),
  Ethereum: Symbol("Ethereum"),
  Polkadot: Symbol("Polkadot"),
  Polygon: Symbol("Polygon"),
  Solana: Symbol("Solana"),
};

console.log(SymBlockchain.Bitcoin); //Symbol(Bitcoin)
SymBlockchain.Bitcoin = Symbol("Shitcoin");
console.log(SymBlockchain.Bitcoin); //Symbol(Shitcoin)

const EnumBlockchain = Object.freeze({
  Bitcoin: Symbol("Bitcoin"),
  Ethereum: Symbol("Ethereum"),
  Polkadot: Symbol("Polkadot"),
  Polygon: Symbol("Polygon"),
  Solana: Symbol("Solana"),
});

//EnumBlockchain.Bitcoin = Symbol("Bitconnect"); // Error

enum Blockchain {
  Bitcoin,
  Ethereum = 100,
  Polkadot,
  Polygon,
  Solana,
}

console.log(Blockchain.Bitcoin); //0
console.log(Blockchain.Ethereum); //100
console.log(Blockchain.Polkadot); //101
console.log(Blockchain.Polygon); //102

enum BlockchainRPC {
  Server = "SERVER-ADDRESS",
  Height = "HEIGHT",
  Latency = "LATENCY",
  Score = "SCORE",
}

console.log(BlockchainRPC);
//{ Server: "SERVER-ADDRESS", Height: "HEIGHT", Latency: "LATENCY", Score: "SCORE" }
console.log(BlockchainRPC.Latency); //Latency

enum Cryptocurrency {
  NetworkList,
  NetworkType,
}

interface NetworkList {
  NetworkID: number;
  Currency: String;
  CryptoType: Cryptocurrency;
}

interface NetworkType {
  mainNet: string;
  testNet: boolean;
}

let PolygonObject: NetworkList = {
  NetworkID: 137,
  Currency: "Matic",
  CryptoType: Cryptocurrency.NetworkList,
};

console.log(PolygonObject);

//Exercising :
enum UserResponse {
  Yes,
  No,
}

enum Laptop {
  Lenovo,
  Alienware,
  Asus,
}

enum Color {
  Red,
  White,
  Black,
}

enum FavoriteBooks {
  Economics,
  Blockchain,
  Mathematics,
  Cryptography,
  Finance,
}

enum StringEnum {
  ZERO = "ZERO",
  ONE = "ONE",
  TWO = "TWO",
}

enum HeterogenousEnum {
  PACKAGE = "HTML TO PDF",
  VERSION = 1,
}
