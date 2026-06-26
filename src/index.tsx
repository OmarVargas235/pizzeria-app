// 1.- libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@shared/query/queryClient";

// 2.- resources
import "./shared/styles/index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("No se encontró el elemento root en el DOM");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
);
