const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="stats ">
        <em>
          Start Adding Some Items To Your Packing List 
        </em>
      </footer>
    );
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = (packedItems / items.length) * 100;
  return (
    <footer className="stats ">
      <em>
        {percentage === 100
          ? "You got every thing ready to go"
          : ` 😎 you have ${
              items.length
            } Items in your list and you already packed 
        ${packedItems} (${Math.floor(percentage)}%)`}
      </em>
    </footer>
  );
};
export default Stats;
