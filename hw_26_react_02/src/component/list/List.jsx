import React from "react";

function List({ items: propList, actions: actionsProps }) {
  return Array.isArray(propList) && propList.length ? (
    <React.Fragment>
      <ul>
        {propList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      {actionsProps.map((item, index) => (
        <button key={index} onClick={item.action}>
          {item.btn}
        </button>
      ))}
    </React.Fragment>
  ) : null;
}

export default List;
