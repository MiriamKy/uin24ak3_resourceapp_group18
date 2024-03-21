import React, { useState } from "react";
import resources from "../assets/ressurser";
import Ressurs from "./Ressurs";
import { Link, useParams } from "react-router-dom";

export default function Layout({children}){


    return (
        <>
            <section>
               {children}
            </section>
        </>
    )
}

/* 

gammel layout.jsx

import React, { useState } from "react";
import resources from "../assets/ressurser";
import Ressurs from "./Ressurs";

export default function Layout(){

    // useState til den valgte kategorien
    const [category, setCategory] = useState([]);

    // ressurs.js har duplikater (flere kateogier med samme navn), så da brukter jeg Set for å fjerne de ved å lage en ny array som kan brukes videre basert på category.
    const categories = [...new Set(resources.map(resource => resource.category))];

    // layouten returnerer først kategoriene, deretter linkene
    return (
        <>
            <section>
                <header>
                    <nav>
                        {categories.map((category, index) =>
                            <Ressurs
                            key={index}
                            category={category}
                            setCategory={setCategory}
                            />)}
                    </nav>
                </header>
                <main>
                {resources.filter(resource => resource.category === category).map((resource, index) =>
                    
                        <ul key={index}>
                        <li>
                            <a href={resource.url}>{resource.title}</a>
                        </li>                        
                        </ul>
                    
                )}
                </main>
            </section>
        </>
    )
} */
