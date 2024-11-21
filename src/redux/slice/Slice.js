import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  physicalScore: "",
  mentalScore: "",
  mobileCompoType: 1,
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
    changeMobileCompoType: (state, action) => {
      state.mobileCompoType = action.payload;
    },

    resetData: (state) => {
      return initialState;
    },
  },
});

export const {
  updatePhysicalScore,
  updateMentalScore,
  resetData,
  changeMobileCompoType,
} = userSlice.actions;

export default userSlice.reducer;
