import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import Home from "./components/Home";
import resources from "./assets/ressurser";

import "/src/Css/sass/main.scss"

function App() { 

  const categories = [...new Set(resources.map(resource => resource.category))];

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home categories={categories}/> }/>
        <Route path="/:slug" element={<Resources categories={categories}/> }/>
      </Routes>
    </Layout>
    </>
  );
}

export default App;
