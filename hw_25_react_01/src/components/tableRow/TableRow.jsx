import React from "react";

function TableRow(props) {
  const item = props.item;
  const indexRow = props.index;
  const isActive = item["class"] === "active";
  return (
    <tr key={indexRow} className={isActive ? "active" : undefined}>
      {Object.keys(item).map((key, itemIndex) =>
        key !== "class" ? <td key={itemIndex}>{item[key]}</td> : undefined
      )}
    </tr>
  );
}

export default TableRow;
