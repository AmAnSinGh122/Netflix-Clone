import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";

const Body = () => {
  const appRouting = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouting} />
    </div>
  );
};

export default Body;
