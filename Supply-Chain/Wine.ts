const { createHash } = await import("node:crypto");
import {
  WineBlockchain,
  Wine,
  Caller,
  Roles,
  WineStatus,
} from "./WineBlockchain";

let uOwnerContract: Caller = {
  address: "0x000",
  role: Roles.OWNER,
};

let uWineMaker: Caller = {
  address: "0x001",
  role: Roles.WINEMAKER,
};

let contract = new WineBlockchain();
const dataWineMaker: Wine = {
  SKU: 1,
  UPC: 1,
  MonthAged: 5,
  OwnerId: uWineMaker.address,
  originWinemakerId: uWineMaker.address,
  originWinemakerName: "GunS-Wine",
  originWinemakerInformation: "single malt",
  originWinemakerLatitude: "x.xx.xx.xx",
  originWinemakerLongitude: "x..x.xx.xx",
  productID: 11,
  productNotes: "August Series",
  productPrice: 5000,
  productFinalPrice: 7000,
  wineState: WineStatus.Made,
  wineMerchantId: "0x003",
  consumerId: "0x004",
};
console.log(contract.makeWine(dataWineMaker, uWineMaker));
console.log(contract.ageWine(1, 5, uWineMaker));
const BlockchainData = contract.getBlockchainData();
//console.log(BlockchainData);

//console.log(contract.getWine(1));
