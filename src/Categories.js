import React from "react";

const Categories = ({ categories, applyFilter }) => {
  return (
    <section className="btn-container">
      {categories.map((category) => {
        return (
          <button className="filter-btn" onClick={() => applyFilter(category)}>
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
