export default function Stats({ items }) {
  // conditional rendering
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in your list 🚀</em>
      </p>
    );
  }

  const itemLength = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItem / itemLength) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything ! Ready to go ✈️"
          : ` You have ${itemLength} items in your list, and you already completed
          ${packedItem} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
