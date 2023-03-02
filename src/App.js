import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const applyFilter = (category) => {
    if (category === "all") {
      return setMenu(items);
    }
    const newItems = items.filter((item) => item.category === category);
    return setMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} applyFilter={applyFilter} />
        <section className="section-center">
          {menu.map((menuItem) => {
            return <Menu key={menuItem.id} {...menuItem} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
