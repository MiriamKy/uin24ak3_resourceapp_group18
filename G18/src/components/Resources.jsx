import React from "react";
import resources from "../assets/ressurser.js"
import { useParams } from "react-router-dom";


/* const Resources = () => {
    const {slug} = useParams();
    const filteredResources = resources.filter(resource => resource.category === slug)
    const uniqueResources = Array.from(new Set(filteredResources.map(resource => resource.title)))
        .map(title => {
            return filteredResources.find(resource => resource.title === title);
        });
  
    return (
        <div>
            {uniqueResources.map((resource) => {
                return (
                    <li key={resource.title}>
                        <a href={resource.url}></a>
                            {resource.title}
                        </a>
                    </li>
                )
            })}
        </div>
    )
}; */

const Resources = () => {
    const {slug} = useParams();
    const filteredResources = resources.filter(resource => resource.category === slug)
    //console.log(category + "hei")
  return (
    <div>
      {filteredResources.map((resource) => {
        return (
            <li key={resource.title}>
            <a
              href={resource.url}>
              {resource.title}
            </a>
          </li>
        );
      })}
    </div>
  );
}

export default Resources;
/*
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
} */
