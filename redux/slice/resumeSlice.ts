import { FontListType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ResumeState {
  template_id: number;
  font: FontListType;
}

const initialState: ResumeState = {
  template_id: 3,
  font: { id: "Times", name: "Times New Roman" },
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setTemplate: (state, action: PayloadAction<number>) => {
      state.template_id = action.payload;
    },
    setFont: (state, action: PayloadAction<FontListType>) => {
      state.font = action.payload;
    },
  },
});

export const { setTemplate, setFont } = resumeSlice.actions;

export default resumeSlice.reducer;
