import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: true },
];
const App = () => {
  const [packedItems, setPackedItems] = useState(initialItems);
  const handleAddNewItem = (item) => {
    setPackedItems((prev) => [...prev, item]);
  };
  const handleDeleteItem = (id) => {
    const newItems = packedItems.filter((item) => item.id !== id);
    setPackedItems(newItems);
  };
  const handleToggleItem = (id) => {
    const newItems = packedItems.map((item) =>
      item.id == id ? { ...item, packed: !item.packed } : item
    );
    setPackedItems(newItems);
  };
  const handleClearList = () => {
    if (window.confirm("Are you sure?")) setPackedItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddNewItem} />
      <PackingList
        packedItems={packedItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={packedItems} />
    </div>
  );
};
export default App;
