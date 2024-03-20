import { resources } from "../assets/ressurser";
import { Link, useParams } from "react-router-dom";
import { useState } from "react" 

console.log(resources);


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

// kommentarer: 
/*
Burde kanskje lage komponent ut av Nav og ut av main?
*/

/* const handleClick = (category) => {
    const sources = resources.filter((source) => source.category === category);
    const uniqueSources = Array.from(new Set(sources.map((source) => source.category)))
        .map((category) => sources.find((source) => source.category === category));
    uniqueSources 
        ? 
        setContent(uniqueSources) 
        : 
        console.log("nada");
}
*/
