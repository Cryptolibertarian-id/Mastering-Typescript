import { order } from "./types";

export function peekBidPrice(order: order[]): any {
  return order[0].price;
}
