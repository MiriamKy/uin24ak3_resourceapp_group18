import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="innhold">
        <nav>
          <ul id="knapper"></ul>
        </nav>
        <main id="aktivtInnhold"></main>
        <Layout />
      </section>
    </>
  );
}

export default App;
