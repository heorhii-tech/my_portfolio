import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import Layout from "./pages/Layout";
import MoreAboutMe from "./pages/MoreAboutMe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "more_about_me",
          element: <MoreAboutMe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
