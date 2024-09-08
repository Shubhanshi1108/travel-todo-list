import { useState } from "react";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        clearList={clearList}
      />

      <Stats items={items} />
    </div>
  );
}
