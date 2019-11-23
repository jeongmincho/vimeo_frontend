import React from "react";
import "./App.css";
import Paper from "./Paper";
import data from "./Data";

function App() {
  return (
    <div className="App">
      <Paper data={data.slice(0, 1)} paperType="paper1"></Paper>
      <Paper data={data.slice(1)} paperType="paper2"></Paper>
    </div>
  );
}

export default App;
