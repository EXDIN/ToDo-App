import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TypeAddToDo, TypeToDo } from '../../typesAndInterfaces/types';


export const toDoApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<TypeToDo[], void>({
      query: () => 'todos',
      providesTags: ['Todos'],
    }),
    createTodo: builder.mutation<TypeAddToDo, Partial<TypeAddToDo>>({
      query: (newTodo) => ({
        url: 'todos',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});


export const { useGetTodosQuery, useCreateTodoMutation } = toDoApi;