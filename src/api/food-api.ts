import foods from "./foods.json";

import {Food, OrderState} from "../types";

export namespace FoodsApi {
  let getOrderStateRequestsCount = 0;
  
  export function getFoods(): Promise<Food[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(foods);
      }, 2_500);
    });
  }

  export function submitOrder(): OrderState {
    getOrderStateRequestsCount = 0;

    return OrderState.Pending;
  }

  export function getOrderState(): OrderState {
    if (getOrderStateRequestsCount === 3) {
      return OrderState.Completed;
    }

    getOrderStateRequestsCount += 1;

    return OrderState.Pending;
  }
}