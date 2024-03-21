import resources from "../assets/ressurser"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Home({categories}) {

    // useState som setter en landingsside med kategori html som innhold
    const [category, setCategory] = useState();


    useEffect(() => {
        setCategory("html");
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