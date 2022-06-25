import { createAction, props } from "@ngrx/store";

const increment = createAction('[Counter] Increment')

const decrement = createAction('[Counter] Decrement');

const reset = createAction('[Counter] Reset');

const setCount = createAction('[Counter] Set count', props<{ count: number }>());

export const counterActions = {
  increment,
  decrement,
  reset,
  setCount,
};