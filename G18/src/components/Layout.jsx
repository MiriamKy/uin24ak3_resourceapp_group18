
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import resources from "../assets/ressurser";

export default function Layout({ children, slug, filteredResources }) {
    const location = useLocation();
    //const { slug } = useParams();

    //console.log(children);
    console.log(slug);

    // fjerne duplikater i resources

    return (
        <>
            <header>
                <nav>
                    <ul>
                       {/*  {resources.map((item, index) => (
                            <li key={`${item.title}-${index}`}>
                                <Link to={`${item.url}`}>
                                    {item.category}
                                </Link>
                            </li>
                        ))} */}
                        {filteredResources.map((item, index) => (
                            <li key={index}>{item.category}</li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
