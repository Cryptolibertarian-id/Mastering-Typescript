interface NFT {
  [key: string]: any;
}

const boredAPE: NFT = {};
boredAPE.creator = "Yuga Labs";
boredAPE.builtOn = "Ethereum";
boredAPE.amount = 10000;

console.log(boredAPE); // { creator: 'Yuga Labs', builtOn: 'Ethereum', amount: 10000 }

interface blockchain {
  [key: string]: any;
  name: string;
}

const Opolygon: blockchain = {
  type: {
    testNet: "Mumbai",
    layer: "Layer2",
  },
  name: "Polygon PoS",
};

console.log(Opolygon); // { type: { testNet: 'Mumbai', layer: 'Layer2' }, name: 'Polygon PoS' }
