import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { chatsReducer } from "./chats/chatsSlice";
import { searchReducer } from "./chats/searchSlice";
import { messagesReducer } from "./messages/slice";
import { rootReducer } from "./root/slice";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

const persistConfig = {
  key: "lastMessages",
  storage,
};

const persistedReducer = persistReducer(persistConfig, chatsReducer);

export const store = configureStore({
  reducer: {
    chats: persistedReducer,
    search: searchReducer,
    messages: messagesReducer,
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      thunk: {
        extraArgument: { socket },
      },
    }),
});

export const persistor = persistStore(store);
