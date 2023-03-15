import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import aysReducer from "./ays";

const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    aysStore: aysReducer,
  },
});
export default store;
