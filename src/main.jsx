import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import emailjs from "@emailjs/browser";

emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
