const Item = ({ item }) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button className="btn">❌</button>
    </li>
  );
};
export default Item;
