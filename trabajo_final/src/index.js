import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import App from "./App";
import { ApiService } from "./services/ApiService";
import { IconsService } from "./services/IconsService";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ApiService>
            <IconsService>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </IconsService>
        </ApiService>
    </React.StrictMode>
);
