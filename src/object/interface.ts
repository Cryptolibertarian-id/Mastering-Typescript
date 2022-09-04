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
