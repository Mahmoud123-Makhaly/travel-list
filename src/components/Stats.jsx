const Stats = ({ items }) => {
  return (
    <footer className="stats">
      <em>
        {" "}
        you have {items.length} items in your list and you already packed 0 (0%)
      </em>{" "}
    </footer>
  );
};
export default Stats;
