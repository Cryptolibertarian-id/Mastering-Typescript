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

let askOrder1: order = {
  id: "5",
  order_type: "ask",
  price: 103.23,
  quantity: 48.0,
  timestamp: Date.now(),
};

let askOrder2: order = {
  id: "2",
  order_type: "ask",
  price: 103.98,
  quantity: 84.0,
  timestamp: Date.now(),
};

let askOrder3: order = {
  id: "3",
  order_type: "ask",
  price: 104.17,
  quantity: 38.0,
  timestamp: Date.now(),
};

let askOrder4: order = {
  id: "4",
  order_type: "ask",
  price: 104.75,
  quantity: 127.0,
  timestamp: Date.now(),
};

export const askArray: order[] = [askOrder3, askOrder1, askOrder2, askOrder4];
