import { createSlice } from "@reduxjs/toolkit";
import {
  createChat,
  deleteChat,
  getChats,
  getOneChat,
  updateChat,
} from "./operations";

const initialState = {
  items: [],
  curChat: null,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getChats.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getOneChat.fulfilled, (state, action) => {
        state.curChat = action.payload;
      })
      .addCase(createChat.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.curChat = action.payload;
      })
      .addCase(updateChat.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (chat) => chat._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        state.curChat = null;
        const index = state.items.findIndex(
          (chat) => chat._id === action.payload._id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      });
  },
});

export const chatsReducer = chatsSlice.reducer;
