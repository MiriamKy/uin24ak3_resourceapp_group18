import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Resources from "./components/Resources";
import Home from "./components/Home";
import resources from "./assets/ressurser";
import "/src/Css/sass/main.scss"

// I App.jsx har vi:
// - Deklarert en variabel som er en filtrert variant av arrayen resources.
// - ressurser.js har duplikater (flere kateogier med samme navn), så Set brukes for å lage en ny array hvor bare et objekt for hver kategori er inkludert
// - Satt opp routing til componentene Home og Resources hvor vi sender med en prop som inneholder den nye arrayen categories (denne brukes til å mappe ut nav-baren i disse komponentene)
// - Vi ser at det å lage to komponenter som er nesten helt like virker litt merkelig, men vi trengte en egen path til "/" som vi da valgte å lage en landingsside (Home) til
// - Fordi vi har valgt å bruke slug-en som path i routen til resources, får vi ikke tilgang til dette komponentet før url-en har fått en slug
// - Ved å lage en landingsside omgår vi "problemet" at det ikke er noen slug å hente når appen starter (Ønsker gjerne tilbakemelding på hvordan dette kan gjøres bedre, hvis det kan)

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
