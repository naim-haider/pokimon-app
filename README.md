# 🧠 Advanced Pokémon Explorer

A full-featured React application that interacts with the [PokeAPI](https://pokeapi.co/) to let users search, filter, view details, compare, and manage favorites for Pokémon. Built with performance and scalability in mind using modern React best practices.

## 🚀 Live Demo

🔗 [View on Vercel](https://pokimon-app-three.vercel.app/)  
📂 [GitHub Repository](https://github.com/naim-haider/pokimon-app)

---

## 📦 Features

### ✅ Core Features

- 🔍 **Search** by name
- 🎯 **Filter** by multiple types
- 📊 **Sort** by ID or name
- 📄 **Paginated view** (10, 20, 50 per page)
- 🧠 **Detailed Pokémon view** with stats, abilities, moves, and evolution chain
- ⭐ **Favorites system** with localStorage persistence
- 🔁 **Random Pokémon** button
- ⚔️ **Comparison tool** to compare two Pokémon side-by-side

### 🔧 Technical Highlights

- ♻️ **React Hooks & Context API** for state management
- 🧩 **Custom hooks** for reusable logic
- 🧠 **Performance optimized** with `useMemo` and `useCallback`
- 🚦 **Error boundaries** for safe UI fallback
- 🧪 **Graceful error/loading states**
- 💅 **Tailwind CSS** for responsive UI
- 🧱 **Feature-based folder structure**

---

## 📁 Project Structure

```bash
src/
│
├── components/         # Reusable UI components (Card, Filters, etc.)
├── pages/              # Route-based pages (Home, Detail, Favorites, Compare)
├── hooks/              # Custom React hooks (e.g., usePaginatedPokemon)
├── contexts/           # Context API providers (e.g., Favorites)
├── services/           # API utilities
├── utils/              # Helpers and utilities
├── App.jsx             # App routes and layout
├── main.jsx            # Entry point
└── index.css           # Tailwind config


# Clone the repo
git clone https://github.com/naim-haider/pokimon-app
cd pokemon-app

# Install dependencies
npm install

# Start the development server
npm run dev

📚 Learnings & Challenges
Implemented dynamic filtering and sorting using useMemo for optimization

Built a reusable FavoritesContext with persistent state via localStorage

Learned efficient data fetching strategies including Promise.all batching

Designed with a scalable folder structure for easy feature expansion


🧑‍💻 Author
      – https://github.com/naim-haider

      Feel free to open issues or pull requests!
```
