import { configureStore } from "@reduxjs/toolkit";

import groupsReducer from "./slices/groups";
import modalGroupReducer from "./slices/modal";
const store = configureStore({
  reducer: {
    groups: groupsReducer,
    modalGroup: modalGroupReducer,
  },
});

export default store;
