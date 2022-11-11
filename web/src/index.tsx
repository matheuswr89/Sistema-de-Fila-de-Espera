import { Loader } from "@googlemaps/js-api-loader";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";

export const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS + "",
  version: "weekly",
  libraries: ["places"],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
      theme="colored"
      newestOnTop={false}
      closeOnClick
      rtl={false}
    />
  </React.StrictMode>
);
