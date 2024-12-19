import { TypeToDo } from "../../../typesAndInterfaces/types";


type TypeTodoComp = {
  task: TypeToDo;
}

function Todo({task}: TypeTodoComp) {
  return (
    <li className="flex break-words flex-col gap-1 self-start h-full rounded-lg p-2 py-1 bg-gray-300 dark:bg-beige dark:text-black">
      <h3>{task.title.slice(0, 10).toUpperCase()}</h3>
      <p>{task.title}</p>  
    </li>
  )
}

export default Todo;
