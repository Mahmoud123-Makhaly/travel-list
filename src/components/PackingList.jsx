import { useState } from "react";
import Item from "./Item";

const PackingList = ({
  packedItems,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortedBy, setSortedBy] = useState("input");

  let sortedItems;
  if (sortedBy === "input") sortedItems = packedItems;
  if (sortedBy === "description")
    sortedItems = packedItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    sortedItems = packedItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
          <option value="input"> SORT BY INPUT ORDER</option>
          <option value="description"> SORT BY DESCRIPTION </option>
          <option value="packed"> SORT BY PACKED STATUS </option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
};
export default PackingList;
