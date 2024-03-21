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
<<<<<<< HEAD
      <Routes>
        <Route path="/:slug" element={<Ressurs  />} />
      </Routes>
=======
        <Routes>
            <Route path="/:slug" element={<Resources  />} />
        </Routes>
>>>>>>> 1be34ea5877ac539c5cf2e957015218e03a1d937
      </Layout>
    </>
  );
}

export default App;
