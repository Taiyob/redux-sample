import { configureStore } from "@reduxjs/toolkit";
import counterHandler from "./features/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterHandler,
  },
});
