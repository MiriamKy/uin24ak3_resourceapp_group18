
// dette er bare en testfil / dummy fil for å teste om routing fungerer


import { Link } from "react-router-dom"

export default function Navtest(){
    return (
      <nav>
            <ul>
                <li><Link to="html">HTML</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="map">JavaScript</Link></li>
                <li><Link to="map">React</Link></li>
                <li><Link to="map">Headless CMS</Link></li>
            </ul>
        </nav> 

    )
}

