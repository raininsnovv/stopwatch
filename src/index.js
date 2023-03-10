import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";
import { BreakContext } from ".//providers/BreakProvider";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing:border-box;
  font-family:Roboto;
  color:#C58940;
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Global />
      <App />
    </>
  </React.StrictMode>
);
