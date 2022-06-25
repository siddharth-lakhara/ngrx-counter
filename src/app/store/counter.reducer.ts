import { createReducer, on } from "@ngrx/store";
import { AppState, initialState } from "./state.types";
import { counterActions } from "./counter.actions";

export const counterReducer = createReducer(
  initialState,
  on(counterActions.increment, (state: AppState) => ({
    ...state,
    count: state.count + 1,
  })
  ),
  on(counterActions.decrement, (state: AppState) => ({
    ...state,
    count: state.count - 1 > 0 ? state.count - 1 : 0,
  })),
  on(counterActions.reset, (state: AppState) => ({
    ...state,
    count: 0,
  }))
);