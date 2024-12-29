import React from "react";
import ReactDOM from "react-dom/client";
//C : It should be 4 imports (See comments in App.tsx)
import App, { HomePage, MovieListPage, CinemaPage } from "./components/App/App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "movie",
        element: <MovieListPage />,
      },
      {
        path: "cinema",
        element: <CinemaPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
