import { order } from "./types";

export function peekOrderPrice(order: order[]): number {
  return order[0].price;
}

export function getSpread(bidOrder: order[], askOrder: order[]): number {
  let bidHighPrice = peekOrderPrice(bidOrder);
  let askLowerPrice = peekOrderPrice(askOrder);
  return askLowerPrice - bidHighPrice;
}

export function getMidPoint(bidOrder: order[], askOrder: order[]): number {
  let bidHighPrice = peekOrderPrice(bidOrder);
  let askLowerPrice = peekOrderPrice(askOrder);
  return (askLowerPrice + bidHighPrice) / 2;
}
