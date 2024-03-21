import { Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/Layout";
//import Resources from "./components/Resources";
import Ressurs from "./components/Ressurs";

import "/src/Css/sass/main.scss"
//import Category from "./components/Category";



function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path="/:slug" element={<Ressurs  />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
