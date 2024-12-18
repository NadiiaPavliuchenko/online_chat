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
    const resp = await axios.get("https://dummyjson.com/quotes/1");
    return resp.data;
  } catch (e) {
    return e.message;
  }
};

export const sendRealtimeMessage = (messageData) => {
  return (dispatch, getState, { socket }) => {
    const tempMessage = {
      ...messageData,
      _id: Date.now(),
    };
    socket.emit("sendMessage", messageData);

    dispatch({
      type: "MESSAGE_SENT",
      payload: tempMessage,
    });
  };
};

export const sendMessage = createAsyncThunk(
  "messages/sendMessage",
  async ({ chatId, text, sender }, thunkApi) => {
    try {
      const result = await api.post("/messages/", { chatId, text, sender });
      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

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
