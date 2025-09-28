import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="Search Students"
          value={value}
          onChange={onChange}
          className="search-input"
        />
      </div>
    </section>
  );
}
