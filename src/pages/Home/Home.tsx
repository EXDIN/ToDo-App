import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";
import Todo from "./Todo/Todo";
import { useGetTodosQuery } from "../../store/api/todoApi";
import { useState } from "react";



function Home() {
  const { data: todos, error, isLoading } = useGetTodosQuery();
  const [filter, setFilter] = useState("");

  const filteredTodos = todos?.filter((todo) =>
    todo.title.toLowerCase().slice(0, 10).includes(filter.toLowerCase())
  );


  if (isLoading) {
    return <p className="flex flex-col text-center">Loading...</p>;
  } 

  if (error) {
    return <p className="flex flex-col text-center">Error...</p>;
  } 

  return (
    <main className="flex flex-col text-center">
      <div className="flex justify-center gap-x-3 p-5 max-600px:flex-wrap max-600px:gap-y-5">
        <input className="border border-gray-400 rounded-3xl p-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          placeholder="Пошук по статтям">
        </input>
        <Link className="bg-gray-400 rounded-3xl p-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          to={Pages.ToDoAdd}>
           Додати нову задачу
        </Link>
      </div>
      {filteredTodos 
        ? <ul className="max-w-[800px] grid grid-cols-4 items-center self-center gap-5 p-5  max-600px:grid-cols-2">
            {filteredTodos.map(task => <Todo key={task.id} task={task}></Todo>)}
          </ul>
        : null
      }
    </main>
  )
}


export default Home;
