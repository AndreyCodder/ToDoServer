import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
