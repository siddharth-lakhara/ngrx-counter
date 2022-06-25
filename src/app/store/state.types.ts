export interface AppState {
  count: number;
}

export interface RootState {
  counter: AppState;
}

export const initialState = {
  count: 0,
};
