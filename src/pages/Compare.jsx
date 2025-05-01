import React, { useEffect, useState } from "react";

export default function Compare() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    async function fetchData(name, setter) {
      if (!name) return;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (res.ok) {
        const data = await res.json();
        setter(data);
      } else {
        setter(null);
      }
    }
    fetchData(name1, setData1);
    fetchData(name2, setData2);
  }, [name1, name2]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Compare Pokémon</h2>
      <div className="flex gap-4 mb-4">
        <input
          placeholder="First Pokémon"
          className="border px-2 py-1 rounded"
          value={name1}
          onChange={(e) => setName1(e.target.value.toLowerCase())}
        />
        <input
          placeholder="Second Pokémon"
          className="border px-2 py-1 rounded"
          value={name2}
          onChange={(e) => setName2(e.target.value.toLowerCase())}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[data1, data2].map((p, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            {p ? (
              <>
                <h3 className="capitalize font-semibold text-lg">
                  #{p.id} {p.name}
                </h3>
                <img src={p.sprites.front_default} alt={p.name} />
                <ul className="mt-2">
                  {p.stats.map((s) => (
                    <li key={s.stat.name} className="capitalize">
                      {s.stat.name}: {s.base_stat}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>Enter a valid Pokémon name</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
