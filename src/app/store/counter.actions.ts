import { createAction } from "@ngrx/store";

const increment = createAction('[Counter] Increment')

const decrement = createAction('[Counter] Decrement');

export const counterActions = {
  increment,
  decrement,
}