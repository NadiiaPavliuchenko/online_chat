import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";
import axios from "axios";

export const getMessages = createAsyncThunk(
  "messages/getMessages",
  async (chatId, thunkApi) => {
    try {
      const result = await api.get(`/messages/${chatId}`);
      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

export const getReplyQuote = async () => {
  try {
    const resp = await axios.get("https://dummyjson.com/quotes/random");
    return resp.data;
  } catch (e) {
    return e.message;
  }
};

export const sendRealtimeMessage = (messageData) => {
  return (dispatch, getState, { socket }) => {
    const tempMessage = {
      ...messageData,
      _id: new Date().toISOString(),
    };
    socket.emit("sendMessage", messageData);

    dispatch({
      type: "MESSAGE_SENT",
      payload: tempMessage,
    });
  };
};

export const markAsRead = (messageId, { isRead }) => {
  return async (dispatch, getState, { socket }) => {
    const data = { messageId, isRead };
    socket.emit("markIsRead", data);
    dispatch({
      type: "READ_MESSAGE",
      payload: data,
    });
  };
};

export const editMessage = createAsyncThunk(
  "messages/editMessage",
  async ({ id, text }, thunkApi) => {
    try {
      const result = await api.put(`/messages/${id}`, { text });
      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);
