const Item = ({ item  , onDelete}) => {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button onClick={()=>onDelete(item.id)}>❌</button>
    </li>
  );
};
export default Item;
