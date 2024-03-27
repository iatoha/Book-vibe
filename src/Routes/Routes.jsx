import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <h1>adding done and ading</h1>
            },
            {
                path: "/listedbooks",
                element: <h1>Listed Books</h1>
            },
            {
                path: "/pagestoread",
                element: <h1>Pages To Read</h1>
            },
        ]
    },

]);

export default router;