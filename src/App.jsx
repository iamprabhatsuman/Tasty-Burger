import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./Components/Home/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
