import { RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Pages from "./pages-enum";
import Page404 from "../pages/Page404/Page404";
import Layout from "../pages/Layout/Layout";
import ArticleAdd from "../pages/ToDoAdd/ToDoAdd";


const routes: RouteObject[] = [
    {
      path: Pages.Home,
      element: <Layout />,
      children: [
        {
            path: Pages.Home,
            element: <Home />,
        },
        {
            path: Pages.ToDoAdd,
            element: <ArticleAdd />,
        },
        {
            path: Pages.Undefined,
            element: <Page404 />,
        },
      ]
    },
]

export default routes;