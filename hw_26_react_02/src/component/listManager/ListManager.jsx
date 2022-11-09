import React, { useState, useEffect } from "react";
import List from "../list/List";

function ListManager({ list: propList }) {
  const [leftItems, setLeftItems] = useState([]);
  const [centerItems, setCenterItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  const moveLeftToCenter = () => {
    setCenterItems([leftItems.shift(), ...centerItems]);
  };

  const moveFromCenterToRight = () => {
    setRightItems([centerItems.shift(), ...rightItems]);
  };

  const moveFromCenterToLeft = () => {
    setLeftItems([centerItems.shift(), ...leftItems]);
  };

  const removeLastItem = () => {
    setRightItems(rightItems.slice(0, -1));
  };

  useEffect(() => {
    setLeftItems(propList);
  }, [propList]);

  return (
    <React.Fragment>
      <List
        items={leftItems}
        actions={[
          {
            btn: "Move To Second",
            action: moveLeftToCenter,
          },
        ]}
      />
      <List
        items={centerItems}
        actions={[
          {
            btn: "Move To First",
            action: moveFromCenterToLeft,
          },
          {
            btn: "Move To Third",
            action: moveFromCenterToRight,
          },
        ]}
      />
      <List
        items={rightItems}
        actions={[{ btn: "Remove last item", action: removeLastItem }]}
      />
    </React.Fragment>
  );
}

export default ListManager;
