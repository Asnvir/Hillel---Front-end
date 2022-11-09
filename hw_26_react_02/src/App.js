import React from "react";
import ListManager from "./component/listManager/ListManager";

const list = [
  {
    id: 1,
    title: `Task 1`,
  },
  {
    id: 2,
    title: `Task 2`,
  },
  {
    id: 3,
    title: `Task 3`,
  },
  {
    id: 4,
    title: `Task 4`,
  },
];

function App() {
  return <ListManager list={list} />;
}

export default App;
