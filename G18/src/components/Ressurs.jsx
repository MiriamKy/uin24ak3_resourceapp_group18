import React, { useEffect, useState } from "react";
import resources from "../assets/ressurser";
//import Category from "./Category";
import { useParams, Link } from "react-router-dom";


export default function Ressurs(){

    const {slug} = useParams();
    

    // useState til den valgte kategorien
    const [category, setCategory] = useState(slug);


    useEffect(() => {
        setCategory(slug);
    }, [slug]);

    
    console.log(slug);

    // ressurs.js har duplikater (flere kateogier med samme navn), så da brukter jeg Set for å fjerne de ved å lage en ny array som kan brukes videre basert på category.
    const categories = [...new Set(resources.map(resource => resource.category))];

    // layouten returnerer først kategoriene, deretter linkene
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

/* 

gammel ressurs 

import React from "react";
import { Link } from "react-router-dom";
//import Category from "./Category";


export default function Ressurs({category, setCategory}){

    return (
        <>
       <h2><Link to={`/${category}`} onClick={() => setCategory(category)}>{category}</Link></h2>
         
        </>
    )
}
*/