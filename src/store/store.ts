import { configureStore } from "@reduxjs/toolkit";
import { toDoApi } from "./api/todoApi";



export const store = configureStore({
    reducer: {
      [toDoApi.reducerPath]: toDoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(toDoApi.middleware),
  });


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;