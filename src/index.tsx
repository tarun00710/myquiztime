import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import DataContextProvider from "./Context/DataProvider";
import ScoreContextProvider from "./Context/ScoreCon";
import SignInContext from "./Context/SignInContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <SignInContext>
          <ScoreContextProvider>
            <App />
          </ScoreContextProvider>
        </SignInContext>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
