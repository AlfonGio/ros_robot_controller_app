import React from "react";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
