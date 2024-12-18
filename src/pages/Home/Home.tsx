import { Link } from "react-router-dom";
import Pages from "../../routing/pages-enum";



function Home() {
  return (
    <>
      <div>
        {/* <Filter></Filter> */}
        <Link to={Pages.ToDoAdd}>Додати задачу</Link>
      </div>
      {/* <Todos></Todos> */}
    </>
  )
}


export default Home;
