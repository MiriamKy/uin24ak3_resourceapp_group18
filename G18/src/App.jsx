import { useState } from "react";
import { resources } from "./assets/ressurser";
import "./App.css";
import Content from "./components/Content";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import "/src/Css/sass/main.scss"
//import "./App.css";


function App() {

  return (
    <>
      <Content title={resources.title} url={resources.url} category={resources.category}/>
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