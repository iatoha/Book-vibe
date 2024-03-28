import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookListDetails from "../Pages/BookListDetails/BookListDetails";
import BookList from "../Pages/BookList/BookList";
import { LoginCard } from "../Components/SingIn/SingIn";
import PageToRead from "../Pages/PageToRead/PageToRead";
import SingUp from "../Components/SingUp/SingUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element:  <Home></Home>
        },
        {
          path: '/booklist-details/:id',
          element: <BookListDetails></BookListDetails>
        },
        {
          path: '/booklists-details',
          element: <BookList></BookList>
        },
        {
          path: "/sing-in",
          element: <LoginCard></LoginCard>
        },
        {
          path: "/sing-up",
          element: <SingUp></SingUp>
        },
        {
          path: "/pages-to-read",
          element: <PageToRead></PageToRead>
        }
      ]
    },
  ]);


export default router