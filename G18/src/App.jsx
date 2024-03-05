import { Routes, Route } from "react-router-dom";
import Html from "/src/components/Html";
import Css from "/src/components/Css";
import Map from "./components/Map";
import Layout from "./components/Layout";

import "./App.css";


function App() {

  return (
    <>
      <Layout>
      <Routes>
        {/* <Route path="html" element={<Html />}></Route>
        <Route path="css" element={<Css />}></Route>
        <Route path="map" element={<Map />}></Route> */}
      </Routes>
      </Layout>
     
    </>
  );
}

export default App;
