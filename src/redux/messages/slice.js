import { createSlice } from "@reduxjs/toolkit";
import { getMessages, editMessage } from "./operations";

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
      .addCase("MESSAGE_SENT", (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase("READ_MESSAGE", (state, action) => {
        const index = state.items.findIndex(
          (message) => message._id === action.payload.messageId
        );
        if (index != -1) {
          state.items[index].isRead = action.payload.isRead;
        }
      })
      .addCase(editMessage.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (message) => message._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const messagesReducer = messagesSlice.reducer;
