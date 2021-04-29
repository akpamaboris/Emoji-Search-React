import "./App.css";
import { useState } from "react";
import Footer from "./Footer.js";
import Search from "./Search.js";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <h1>Emoji Search</h1>
      <Search search={search} setSearch={setSearch} />
      <Footer />
    </div>
  );
}

export default App;
