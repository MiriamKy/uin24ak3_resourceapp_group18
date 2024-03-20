/* import { useState } from "react";
import { resources } from "./assets/ressurser";
import Content from "./components/Content"; */
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";

import "/src/Css/sass/main.scss"


function App() {

  return (
    <>
      <Layout>
      <Routes>
        
        <Route path=":slug" element={<Resources  />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;

// ny commit 
// <Content title={resources.title} url={resources.url} category={resources.category}/><Route path="resources" element={<Resources />}></Route>
/*  <Route path="/css" elememt={<Resources category="css" />} />
        <Route path="/javascript" element={<Resources category={"javascript"} />} />
        <Route path="/react" element={<Resources category={"react"} />} />
        <Route path="/headless-cms" element={<Resources category={category} />} />*/