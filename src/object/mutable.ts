interface IBlockchain {
  name: string;
  creator: string;
  totalCoin: number;
}

const InterfaceBitcoin: IBlockchain = {
  name: "Bitcoin",
  creator: "Satoshi Nakamoto",
  totalCoin: 21000000,
};

console.log(InterfaceBitcoin.creator); //Satoshi Nakamoto
InterfaceBitcoin.creator = "Anonymous";
console.log(InterfaceBitcoin.creator); //Anonymous
