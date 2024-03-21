import resources from "../assets/ressurser";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

// I Resources-komponente har vi:
// useState (category) henter den valgte kategorien fra slug-en siden url-en nå har fått en slug (som legges til/oppdateres ved hjelp av routingen)
// Så skrives og returneres html-strukturen ved hjelp av prop-en categories (den filtrerte arrayen), Staten category, og direkte fra ressurser.js-filen

export default function Resources({categories}){

    const {slug} = useParams();
    const [category, setCategory] = useState(slug);

    useEffect(() => {
        setCategory(slug);
    }, [slug]);

    return (
        <>
                <header>
                    <nav>
                    
                        {categories.map((category, index) =>
                        <h2 key={index}><Link to={`/${category}`}>{category}</Link></h2>)}
                
                </nav>
                </header>
                <main>
                    <h3>{category}</h3>
                    <ul>
                {resources.filter(resource => resource.category === category).map((resource, index) =>
                    
                        <li key={index}>
                            <a href={resource.url}>{resource.title}</a>
                        </li>                        
                    
                )}
                </ul>
                </main>
        </>
    )
}