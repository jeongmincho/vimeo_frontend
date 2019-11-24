import React from "react";
import "./App.css";
import Paper from "./components/Paper/Paper";
import data from "./Data";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Paper data={data.slice(0, 1)} paperType="paper1"></Paper>
      <Paper data={data.slice(1)} paperType="paper2"></Paper>
      <Slider />
    </div>
  );
}

export default App;
