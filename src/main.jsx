import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="mz-theme">
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
