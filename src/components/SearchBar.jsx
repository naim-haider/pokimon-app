import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="border px-3 py-2 rounded w-full max-w-xs"
      type="text"
      placeholder="Search Pokémon..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
