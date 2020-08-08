import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Cards from "./components/Job_cards";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body__container">
        <Sidebar />
        <section className="cards__cont">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </section>
      </div>
    </div>
  );
}

export default App;
