import resources from "../assets/ressurser"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

// I Home-componentet har vi:
// - useState (homeCategory) og useEffect (setHomeCategory) som setter kategorien "html" for landingssiden
// - Innholdet på landingssiden skrives ut i return
// - Prop-en categories blir sendt hit fra App (i parenteser bak Home) og .mappes for utskrift av nav-baren
// - Tittelen for landingssiden blir skrevet ut basert på Staten
// - Videre .mappes den originale ressurser-arrayen for å få ut relevant tittel og listepunkter for kategorien, som som nevnt er satt til "html"

export default function Home({categories}) {

    const [homeCategory, setHomeCategory] = useState();

    useEffect(() => {
        setHomeCategory("html");
    }, []);

    return (
        <>
                <header>
                    <nav>
                        {categories.map((category, index) =>
                        <h2 key={index}><Link to={`/${category}`}>{category}</Link></h2>)}
                    </nav>
                </header>
                <main>
                    <h3>{homeCategory}</h3>
                    <ul>
                        {resources.filter(resource => resource.category === homeCategory).map((resource, index) =>
                        <li key={index}><a href={resource.url}>{resource.title}</a></li>
                        )}
                </ul>
                </main>
        </>
    )
}