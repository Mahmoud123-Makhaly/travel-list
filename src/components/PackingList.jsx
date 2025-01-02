import { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDelete, onToggleItem, onClearList }) => {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") sortedItems = items;
  if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="options">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">ORDER BY INPUT ORDER </option>
          <option value="description">ORDER BY DESCRIPTION</option>
          <option value="packed">ORDER BY PACKED STATUS</option>
        </select>
        <button onClick={() => onClearList()}>Clear </button>
      </div>
    </div>
  );
};
export default PackingList;
