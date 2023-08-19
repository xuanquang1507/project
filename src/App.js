import React from "react";
import "./App.css";
import ToastMessage from "./component/ToastMessage";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      <ToastMessage/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
