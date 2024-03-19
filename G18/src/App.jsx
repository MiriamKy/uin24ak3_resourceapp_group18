import { useState } from "react";
import { resources } from "./assets/ressurser";
import "./App.css";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <section id="innhold">
        <nav>
          <ul id="knapper"></ul>
        </nav>
        <main id="aktivtInnhold"></main>
      </section> */}
      <Content title={resources.title} url={resources.url} category={resources.category}/>
    </>
  );
}

export default App;
