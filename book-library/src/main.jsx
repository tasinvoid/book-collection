import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Root/Home/Home.jsx";
import ListedBooks from "./Components/Root/ListedBooks.jsx";
import PagesToRead from "./Components/Root/PagesToRead.jsx";
import BookDetail from "./Components/Root/Home/BookDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          let data = fetch("booksData.json");
          return data;
        },
      },
      {
        path: "/listedBooks",
        Component: ListedBooks,
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead,
      },
      {
        path: "books/:Id",
        Component: BookDetail,
        loader: async () => {
          let data = fetch("booksData.json");
          return data;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
