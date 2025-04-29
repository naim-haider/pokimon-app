import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({
  searchTerm,
  onSearch,
  selectedType,
  onTypeChange,
  types,
}) {
  return (
    <div className="max-w-5xl mx-auto mt-6 bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-2/3">
        <Search className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
        />
      </div>
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
