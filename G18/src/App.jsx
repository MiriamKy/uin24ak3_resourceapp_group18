import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="innhold">
        <nav>
          <ul id="knapper"></ul>
        </nav>
        <main id="aktivtInnhold"></main>
      </section>
    </>
  );
}

export default App;
