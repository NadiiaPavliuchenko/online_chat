import { createSlice } from "@reduxjs/toolkit";
import { getMessages, sendMessage, editMessage } from "./operations";

const initialState = {
  items: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editMessage.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (chat) => chat._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const messagesReducer = messagesSlice.reducer;
