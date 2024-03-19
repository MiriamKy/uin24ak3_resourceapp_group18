import { Routes, Route } from "react-router-dom";
import Html from "/src/components/Html";
import Css from "/src/components/Css";
import Layout from "./components/Layout";

import "/src/Css/sass/main.scss"
//import "./App.css";


function App() {

  return (
    <>
      <Layout>
      <Routes>
        <Route path="html" element={<Html />}></Route>
        <Route path="css" element={<Css />}></Route>
      </Routes>
      </Layout>
     
    </>
  );
}

export default App;

// ny commit