import React from "react";
import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/UI/header/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./components/UI/footer/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
