import { Link } from "react-router-dom"

export default function Navtest(){
    return (
      <nav>
            <ul>
                <li><Link to="html">html</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="map">JavaScript</Link></li>
                <li><Link to="map">REACT</Link></li>
                <li><Link to="map">Sanity</Link></li>
            </ul>
        </nav> 

    )
}

/* import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resources } from '../assets/ressurser.js';

const Navtest = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(resources.map(resource => resource.category)));
        setCategories(uniqueCategories);
    }, []); // Empty dependency array to ensure this effect runs only once on component mount

    return (
        <nav>
            <ul>
                {categories.map(category => (
                    <li key={category}>
                        <Link to={category}>{category.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navtest; */