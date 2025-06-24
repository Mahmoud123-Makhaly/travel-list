import Item from "./Item";

const PackingList = ({ packedItems }) => {
  return (
    <div className="list">
      <ul>
        {packedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className="actions">
        <select>
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
};
export default PackingList;
