import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </main>
  );
}
