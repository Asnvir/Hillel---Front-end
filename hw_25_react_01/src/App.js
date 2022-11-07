import React, { useState, useEffect } from "react";
import Table from "./components/table/Table";

export default function App() {
  let [animals, setAnimals] = useState([
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ]);
  let [numChangedRows, setNumChangedRows] = useState(0);

  return (
    <Table
      animals={animals}
      setAnimals={setAnimals}
      numChangedRows={numChangedRows}
      setNumChangedRows={setNumChangedRows}
    />
  );
}
