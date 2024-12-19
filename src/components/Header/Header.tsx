import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";
import ThemeToggle from "./ThemeToggle/ThemeToggle";


function Header() {
  return (
    <header className="flex justify-center pt-5 pb-5 border-b border-gray-300 sticky top-0 bg-gray-800 bg-opacity-90">
        <nav>
            <ul className="flex gap-3 max-600px:flex-wrap max-600px:gap-y-5 max-600px:justify-center">
                <li className=" bg-gray-400 rounded-3xl p-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white
                hover:shadow-lg hover:shadow-gray-500 hover:shadow-center 
              dark:hover:shadow-white duration-200">
                  <Link to={Pages.Home}>На головку сторінку</Link>
                </li>
                <li className=" bg-gray-400 rounded-3xl p-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white
                hover:shadow-lg hover:shadow-gray-500 hover:shadow-center 
              dark:hover:shadow-white duration-200">
                  <Link to={Pages.ToDoAdd}>Додати новий запис</Link>
                </li>
                <ThemeToggle></ThemeToggle>
            </ul>
        </nav>
    </header>
  )
}


export default Header;