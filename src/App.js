import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import images from "./data/images.json";
import Card from "./Card";
import Pokemon from "./Pokemon";
import Modal from "./Modal";

function App() {


  return (
    <div className="App">
   <Pokemon />
    </div>
  );
}

export default App;
