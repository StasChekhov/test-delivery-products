import { configureStore } from "@reduxjs/toolkit";

import { deliveryApi } from "./deliveryApi";
import { contactsSliceReducer } from "./clickSlice";

export const store = configureStore({
 reducer: {
  myValue: contactsSliceReducer,
  [deliveryApi.reducerPath]: deliveryApi.reducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(deliveryApi.middleware),
});
