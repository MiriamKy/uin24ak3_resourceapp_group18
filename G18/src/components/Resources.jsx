/* import React from "react";
import resources from "../assets/ressurser.js"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";


export default function Resources(){
    const { category } = useParams();
    const [content, setContent] = useState([]);

    const handleClick = (category) => {
        const sources = resources.filter((source) => source.category === category);
        sources 
        ? 
        setContent(sources) 
        : 
        console.log("nada"); 
    }

    // useEffect istedet for handleClick

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/html" onClick={() => handleClick('html')}>HTML</Link></li>
                    <li><Link to="/css" onClick={() => handleClick('css')}>CSS</Link></li>
                    <li><Link to="/javascript" onClick={() => handleClick('javascript')}>JavaScript</Link></li>
                    <li><Link to="/react" onClick={() => handleClick('react')}>React</Link></li>
                    <li><Link to="/headless-cms" onClick={() => handleClick('headless-cms')}>Headless CMS</Link></li>
                </ul>
            </nav>
        </header>
        <main category={category}>
            {content.map((item, index) => (
                <article key={index}>
                    <Link to={item.url}>{item.title}</Link>
                </article>
            ))}
        </main>
        </>
    )
}


    }*/  