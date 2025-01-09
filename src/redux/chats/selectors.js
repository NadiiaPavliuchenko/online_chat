import { createSelector } from "@reduxjs/toolkit";

export const selectChats = (state) => state.chats.items;

export const selectCurrentChat = (state) => state.chats.curChat;

export const selectLastMessages = (state) => state.chats.lastMessages;

export const selectQuery = (state) => state.search.query;

export const selectVisibleChats = createSelector(
  [selectChats, selectQuery],
  (chats, query) => {
    return chats.filter(
      (chat) =>
        chat.firstName.toLowerCase().includes(query.toLowerCase()) ||
        chat.lastName.toLowerCase().includes(query.toLowerCase())
    );
  }
);
