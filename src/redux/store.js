import { configureStore } from "@reduxjs/toolkit";
import { chatsReducer } from "./chats/chatsSlice";
import { searchReducer } from "./chats/searchSlice";
import { messagesReducer } from "./messages/slice";
import { rootReducer } from "./root/slice";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    search: searchReducer,
    messages: messagesReducer,
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { socket },
      },
    }),
});
