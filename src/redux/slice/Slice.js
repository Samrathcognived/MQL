import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  physicalScore: "",
  mentalScore: "",
  mobileCompoType: 1,
  physicalActivityAnswer: [],
  mentalActivityAnswer: [],
  physicalActivityIndex: 0,
  mentalActivityIndex: 0,
  selectedDifficulty: "",
  questionIndex: 0,
  allAnswers: [],
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
    setPhysicalActivityAnswer: (state, action) => {
      state.physicalActivityAnswer = action.payload;
    },
    setMentalActivityAnswer: (state, action) => {
      state.mentalActivityAnswer = action.payload;
    },
    setPhysicalActivityIndex: (state, action) => {
      state.physicalActivityIndex = action.payload;
    },
    setMentalActivityIndex: (state, action) => {
      state.mentalActivityIndex = action.payload;
    },
    setSelectedDifficulty: (state, action) => {
      state.selectedDifficulty = action.payload;
    },
    updateQuestionIndex: (state, action) => {
      state.questionIndex = action.payload;
    },
    updateAllAnswer: (state, action) => {
      state.allAnswers = action.payload;
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
  setMentalActivityAnswer,
  setMentalActivityIndex,
  setPhysicalActivityAnswer,
  setPhysicalActivityIndex,
  setSelectedDifficulty,
  updateQuestionIndex,
  updateAllAnswer,
} = userSlice.actions;

export default userSlice.reducer;
