import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";


function Header() {
  return (
    <header className="flex justify-center pt-5 pb-5">
        <nav className="">
            <ul className="flex gap-3">
                <li className="border border-red-500 rounded-3xl p-3"><Link to={Pages.Home}>На головку сторінку</Link></li>
                <li className="border border-red-500 rounded-3xl p-3"><Link to={Pages.ToDoAdd}>Додати новий запис</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
