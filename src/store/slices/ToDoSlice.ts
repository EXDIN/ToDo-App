import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeToDo = {
    test: number;
}


const initialToDoState: TypeToDo[] = []

const toDoSlice = createSlice({
    name: "todos",
    initialState: initialToDoState,
    selectors: {
        getAllTodos: (state) => state,
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TypeToDo>) => {
            state.push(action.payload)
        },
    },
})


export const { addTodo: addTodo } = toDoSlice.actions;
export const { getAllTodos } = toDoSlice.selectors;

export default toDoSlice;