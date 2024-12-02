import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

export const getChats = createAsyncThunk(
  "chats/getAllChats",
  async (_, thunkApi) => {
    try {
      const result = await api.get("/chats/");
      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

export const createChat = createAsyncThunk(
  "chats/createChat",
  async ({ firstName, lastName }, thunkApi) => {
    try {
      const result = await api.post("/chats/", { firstName, lastName });
      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

export const updateChat = createAsyncThunk(
  "chats/updateChat",
  async ({ id, firstName, lastName }, thunkApi) => {
    try {
      const result = await api.put(`/chats/${id}`, { firstName, lastName });
      return result.data;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteChat = createAsyncThunk(
  "chats/deleteChat",
  async (id, thunkApi) => {
    try {
      const result = await api.delete(`/chats/${id}`);
      return result;
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);
