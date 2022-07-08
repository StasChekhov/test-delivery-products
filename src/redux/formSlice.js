import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
 name: "form",
 initialState: {
  name: "",
  from: "",
  to: "",
  radio: "",
  time: "",
  comment: "",
 },
 reducers: {
  setName: (store, action) => {
   store.name = action.payload;
  },
  setFrom: (store, action) => {
   store.from = action.payload;
  },
  setTo: (store, action) => {
   store.to = action.payload;
  },
  setRadio: (store, action) => {
   store.radio = action.payload;
  },
 },
});

export const { filterContacts } = formSlice.actions;

export const formSliceReducer = formSlice.reducer;
