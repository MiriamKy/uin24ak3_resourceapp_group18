import { Link } from "react-router-dom"

export default function Navtest(){
    return (
        <nav>
            <ul>
                <li><Link to="html">HTML</Link></li>
                <li><Link to="css">CSS</Link></li>
                <li><Link to="map">MAP</Link></li>
            </ul>
        </nav>
    )
}