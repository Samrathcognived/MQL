import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  physicalScore: "",
  mentalScore: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updatePhysicalScore: (state, action) => {
      state.physicalScore = action.payload;
    },
    updateMentalScore: (state, action) => {
      state.mentalScore = action.payload;
    },

    resetData: (state) => {
      return initialState;
    },
  },
});

export const { updatePhysicalScore, updateMentalScore, resetData } =
  userSlice.actions;

export default userSlice.reducer;
