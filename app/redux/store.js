import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
import stateSlice from "./stateSlice";

export const store = configureStore({
  reducer: {
    stateSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(middleware),
});

// setupListeners(store.dispatch);
