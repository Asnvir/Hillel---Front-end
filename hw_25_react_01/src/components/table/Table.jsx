import React, { useState, useEffect } from "react";
import TableRow from "../tableRow/TableRow";
import { getRandomInt } from "../../util/util";
import "./style.sass";

function Table(props) {
  let { animals, setAnimals, numChangedRows, setNumChangedRows } = props;

  useEffect(() => {
    setInterval(() => {
      const randomIndex = getRandomInt(0, animals.length);
      const randomItem = animals[randomIndex];
      // console.log(animals.length);
      // console.log(randomIndex);
      // console.log(randomItem);
      // console.log(animals);
      const updatedAnimals = animals.map((item) =>
        item === randomItem
          ? Object.assign({}, item, { class: "active" })
          : item
      );
      setAnimals(updatedAnimals);
      // console.log(randomItem);
      // console.log(animals);
      // console.log(`--------------`);
      // if (!randomItem.classList.contains("green")) {
      //   randomItem.classList.add("green");
      //   setNumChangedRows((prevState) => prevState + 1);
      // }
    }, 2000);
  }, []);

  return (
    <table>
      <tbody>
        {animals.map((item, index) => (
          <TableRow key={index} item={item} index={index} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
