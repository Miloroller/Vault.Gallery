import { createOrder } from "../models/order";

export async function createNewOrder(data) {
  return createOrder(data);
}
