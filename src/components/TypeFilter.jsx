import React, { useEffect, useState } from "react";

export default function TypeFilter({ selected, onChange }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => setTypes(data.results.map((t) => t.name)));
  }, []);

  const toggleType = (type) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type) => (
        <button
          key={type}
          onClick={() => toggleType(type)}
          className={`px-2 py-1 rounded text-sm capitalize ${
            selected.includes(type) ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
