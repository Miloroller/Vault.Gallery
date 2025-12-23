import { ORDER_STATUS } from "./orderStateMachine";

export function markPaymentReceived(order) {
  return {
    ...order,
    status: ORDER_STATUS.PAID,
    paidAt: new Date().toISOString(),
  };
}

export function markDelivered(order) {
  return {
    ...order,
    status: ORDER_STATUS.DELIVERED,
    deliveredAt: new Date().toISOString(),
  };
}

export function markCompleted(order) {
  return {
    ...order,
    status: ORDER_STATUS.COMPLETED,
    completedAt: new Date().toISOString(),
  };
}

export function openDispute(order, reason) {
  return {
    ...order,
    status: ORDER_STATUS.DISPUTED,
    disputeReason: reason,
    disputedAt: new Date().toISOString(),
  };
}
