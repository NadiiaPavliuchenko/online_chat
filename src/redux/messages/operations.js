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
