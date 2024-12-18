import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slices/ToDoSlice";



const store = configureStore({
    reducer: {
        [toDoSlice.name]: toDoSlice.reducer,
    }
})


export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;