import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items , setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
  ]
  );
  const handleAddItems = (item)=>{
    setItems([...items ,item ])
  }
  const handleDeleteItem=(id)=>{
 
setItems(prev=>prev.filter(item=>item.id!==id))
  }
  return (
    <div className="app">
      <Logo />
      <Form   onAddItems={handleAddItems}/>
      <PackingList items={items} onDelete={handleDeleteItem}  />
      <Stats />
    </div>
  );
};
export default App;
