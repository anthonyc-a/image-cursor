import { useState } from "react";
import Cursor from "./Cursor";
import Item from "./Item";

const App = () => {
  const [cursorActive, setCursorActive] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  return (
    <div>
      <Cursor cursorActive={cursorActive} currentItem={currentItem} />
      <div className="item-container">
        <div className="items">
          <Item
            setCursorActive={setCursorActive}
            setCurrentItem={setCurrentItem}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
