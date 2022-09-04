interface IBlockchain {
  blockchain: string;
  creator: string;
  totalCoin: number;
}

const Interface_bitcoin: IBlockchain = {
  blockchain: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

const { blockchain, creator } = Interface_bitcoin;
console.log(`${blockchain} is invented by ${creator}`);
