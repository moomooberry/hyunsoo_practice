import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  value: number;
  name: string;
}

const initialState: State = {
  value: 0,
  name: "moo",
};

export const counterSlice = createSlice({
  name: "mooCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    nameChange: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { increment, decrement, nameChange } = counterSlice.actions;
export default counterSlice.reducer;
