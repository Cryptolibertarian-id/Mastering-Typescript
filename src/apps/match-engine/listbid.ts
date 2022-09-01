import { order } from "./types";

let bidOrder1: order = {
  id: "1",
  order_type: "bid",
  price: 102.55,
  quantity: 24.0,
  timestamp: Date.now(),
};

let bidOrder2: order = {
  id: "2",
  order_type: "bid",
  price: 101.87,
  quantity: 32.0,
  timestamp: Date.now(),
};

let bidOrder3: order = {
  id: "3",
  order_type: "bid",
  price: 101.48,
  quantity: 293.0,
  timestamp: Date.now(),
};

let bidOrder4: order = {
  id: "4",
  order_type: "bid",
  price: 101.48,
  quantity: 293.0,
  timestamp: Date.now(),
};

export const bidArray: order[] = [bidOrder3, bidOrder1, bidOrder2, bidOrder4];
