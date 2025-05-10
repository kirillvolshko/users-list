"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  filter: Record<string, string>;
}

const initialState: FilterState = {
  filter: {},
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setUserFilter: (state, action: PayloadAction<Record<string, string>>) => {
      state.filter = action.payload;
    },
    resetUserFilter: (state) => {
      state.filter = {};
    },
  },
});

export const { setUserFilter, resetUserFilter } = filterSlice.actions;
export default filterSlice.reducer;
