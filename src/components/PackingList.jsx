import Item from "./Item";


const PackingList = ({items , onDelete}) => {
  return (
    <div className="list">
     
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};
export default PackingList;
