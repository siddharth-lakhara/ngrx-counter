import { createAction } from "@ngrx/store";

const increment = createAction('[Counter] Increment')

const decrement = createAction('[Counter] Decrement');

const reset = createAction('[Counter] Reset');

export const counterActions = {
  increment,
  decrement,
  reset,
}