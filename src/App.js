import React from "react";
function Todo() {
  const [item, setItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const handleAdd = () => {
    let n = [...items];
    n.unshift({ value: item, decoration: "none" });
    setItems(n);
    setItem("");
  };

  const toggleCheck = (item) => {
    let i = items.map((i) => {
      let nv = item.decoration === "none" ? "line-through" : "none";
      if (i.value === item.value) return { ...item, decoration: nv };

      return i;
    });
    setItems(i);
  };

  return (
    <div>
      <div>My TODO list</div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></input>
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {items.map((item) => (
          <li
            onClick={() => toggleCheck(item)}
            style={{ textDecoration: item.decoration }}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
// Modify this function if you want to change the preview
// It will not be evaluated as part of the assessment
function App() {
  return <Todo />;
}

export default App;
