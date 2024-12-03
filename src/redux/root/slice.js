import { createSlice } from "@reduxjs/toolkit";
import { handlePending, handleRejected, handleFullfilled } from "./handlers";

const initialState = {
  isLoading: null,
  isError: null,
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(({ type }) => type.endsWith("/pending"), handlePending)
      .addMatcher(({ type }) => type.endsWith("/rejected"), handleRejected)
      .addMatcher(({ type }) => type.endsWith("/fulfilled"), handleFullfilled);
  },
});

export const rootReducer = rootSlice.reducer;
