import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import classes from "./index.module.css";
import { ImageDataProvider } from "./context/ImageDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImageDataProvider>
      <App />
    </ImageDataProvider>
  </React.StrictMode>
);
