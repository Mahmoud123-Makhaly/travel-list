const Stats = ({ items }) => {
  const allItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / allItems) * 100);
  if (items.length === 0) {
    return (
      <footer className="stats">
        {" "}
        <em>Start adding some items to your packing list</em>{" "}
      </footer>
    );
  }

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything ready to go!</em>
      ) : (
        <em>
          {" "}
          you have {allItems} items in your list and you already packed{" "}
          {packedItems} ({percentage}%)
        </em>
      )}
    </footer>
  );
};
export default Stats;
