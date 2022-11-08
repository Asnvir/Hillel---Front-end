import React from "react";
import "./style.sass";

function TableRow({ item, active: isActive }) {
  return (
    <tr className={isActive ? "active" : ""}>
      {Object.keys(item).map((key, itemIndex) => (
        <td key={itemIndex}>{item[key]}</td>
      ))}
    </tr>
  );
}

export default TableRow;
