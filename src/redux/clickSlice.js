import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
 name: "myValue",
 initialState: {
  filter: "",
 },
 reducers: {
  filterContacts(state, action) {
   state.filter = action.payload.text;
  },
 },
});

export const { filterContacts } = clickSlice.actions;

export const contactsSliceReducer = clickSlice.reducer;

//Selectors

export const getFilter = (state) => {
 return state.myValue.filter;
};
