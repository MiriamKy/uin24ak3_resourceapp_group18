import { Routes, Route } from "react-router-dom";
import Html from "/src/components/Html";

import "./App.css";
import Layout from "./components/Layout";

function App() {

  return (
    <>
      <Layout>
      <Routes>
        <Route path="html" element={<Html />}></Route>
      </Routes>
      </Layout>
    </>
  );
}

export default App;
