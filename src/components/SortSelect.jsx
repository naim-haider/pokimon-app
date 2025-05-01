import React from "react";

export default function SortSelect({ value, onChange }) {
  return (
    <select
      className="border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="id">Sort by ID</option>
      <option value="name">Sort by Name</option>
    </select>
  );
}
