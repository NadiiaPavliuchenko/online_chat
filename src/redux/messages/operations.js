import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

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

export const listenForMessages = () => {
  return (dispatch, getState, { socket }) => {
    socket.on("getReply", (message) => {
      console.log("New message received:", message);
      dispatch({
        type: "REPLY_MESSAGE_RECEIVED",
        payload: message,
      });
    });
  };
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
