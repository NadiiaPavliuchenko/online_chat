import { configureStore } from "@reduxjs/toolkit";
import { chatsReducer } from "./chats/chatsSlice";
import { searchReducer } from "./chats/searchSlice";
import { messagesReducer } from "./messages/slice";

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    search: searchReducer,
    messages: messagesReducer,
  },
});
