import React, { useState, useEffect } from "react";
import TableRow from "../tableRow/TableRow";
import { getRandomInt } from "../../util/util";
import "./style.sass";

function Table({ animals: propAnimals }) {
  const [animals, setAnimals] = useState(propAnimals);
  const numberOfActiveAnimals = animals.filter(
    (animal) => animal.active
  ).length;

  const getTableClass = () => {
    if (numberOfActiveAnimals === animals.length) {
      return "heavy-border";
    }
    if (numberOfActiveAnimals >= animals.length / 2) {
      return "bold-border";
    }

    return "";
  };

  useEffect(() => {
    if (numberOfActiveAnimals === animals.length) {
      return;
    }
    const interval = setInterval(() => {
      const randomIndex = getRandomInt(0, animals.length - 1);
      const updatedAnimals = animals.map((animal, index) => {
        return index === randomIndex ? { ...animal, active: true } : animal;
      });
      setAnimals(updatedAnimals);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [animals, numberOfActiveAnimals]);

  return (
    <table className={getTableClass()}>
      <tbody>
        {animals.map((item, index) => (
          <TableRow key={index} item={item} active={item.active} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
