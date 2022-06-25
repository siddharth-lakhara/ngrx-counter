import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "./state.types";
import { counterActions } from "./counter.actions";

export const counterReducer = createReducer(
  initialState,
  on(counterActions.increment, (state: AppState) => ({
    ...state,
    counter: state.counter + 1,
  })
  ),
  on(counterActions.decrement, (state: AppState) => ({
    ...state,
    counter: state.counter - 1 ? state.counter : 0,
  }))
);