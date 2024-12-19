import { useState } from "react";
import { TypeAddToDo } from "../../typesAndInterfaces/types";
import { useCreateTodoMutation, useGetTodosQuery } from "../../store/api/todoApi";
import { useNavigate } from 'react-router-dom';


const initTodo: TypeAddToDo = {
  title: "",
  description: "",
  completed: false,
  userId: 1,
}

function ToDoAdd() {
  const [ todo, setTodo ] = useState(initTodo);
  const [ createTodo ] = useCreateTodoMutation();
  const navigate = useNavigate();
  // const { refetch } = useGetTodosQuery();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await createTodo(todo).unwrap();
      console.log("Створено todo:", result);
      // refetch();
      navigate('/');
    } catch (e) {
      console.log("Помилка створення todo: ", e);
      alert("Помилка створення завдання!")
    }
  }

  return (
    <form onSubmit={e => handleForm(e)} className="flex flex-col min-w-[300px] max-w-[500px] p-4 justify-center self-center gap-y-2">
      <input className="bg-white dark:bg-gray-300 p-2 rounded-lg" required placeholder="Назва" onChange={e => setTodo({...todo, title: e.target.value})}></input>
      <input className="bg-white dark:bg-gray-300 p-2 rounded-lg " placeholder="Опис" onChange={e => setTodo({...todo, description: e.target.value})}></input>
      <button type="submit" className="rounded-lg bg-gray-300 dark:bg-beige p-2">Створити завдання</button>
    </form>
  )
}


export default ToDoAdd;
