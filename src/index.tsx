import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "./index.css";
import App from "./App";
import DataContextProvider from "./Context/DataProvider";
import ScoreContextProvider from "./Context/ScoreCon";
import SignInContext from "./Context/SignInContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <SignInContext>
          <ScoreContextProvider>
            <App />
          </ScoreContextProvider>
        </SignInContext>
      </DataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
