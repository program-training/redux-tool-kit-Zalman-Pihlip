import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentState {
  currentAnimal: string;
}

const initialState: CurrentState = {
  currentAnimal: "",
};

export const slice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    setAnimal: (state, action: PayloadAction<string>) => {
      state.currentAnimal = action.payload
    },
  },
});

export const { setAnimal } = slice.actions;

export default slice.reducer;
