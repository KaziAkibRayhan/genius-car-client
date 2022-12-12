import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Routes";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto" data-theme="light">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
