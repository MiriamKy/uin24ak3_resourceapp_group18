import Resources from "./Resources"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react" 
import resources from "../assets/ressurser";

export default function Layout({children}){
   

    return (
        <>
            <header>
                <nav>
                    <ul>
                        {resources.map(item => (
                            <li key={item.title}>
                                <Link to={item.url}>{item.category}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}