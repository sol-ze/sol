import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import letterReducer from "./letter";

//initial the global redux "state"
const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    letterStore: letterReducer,
  },
});
export default store;
