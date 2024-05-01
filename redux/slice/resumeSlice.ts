import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ResumeState {
  template_id: number;
  font: string;
}

const initialState: ResumeState = {
  template_id: 1,
  font: "Times New Roman",
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<number>) => {
      state.template_id = action.payload;
    },
    setFont: (state, action: PayloadAction<string>) => {
      state.font = action.payload;
    },
  },
});

export const { setTemplate, setFont } = resumeSlice.actions;

export default resumeSlice.reducer;
