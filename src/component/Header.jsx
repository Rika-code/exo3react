import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu"

function Header () {
    return (
        <header className="header">
        <h1> Le blog de Rika, qui va pas être très beau </h1>
        <nav className="navbarheader">
            <ul className="headerul1">
                <li className="headerli1"> 
                <Link to ="/">Home</Link>
                </li>
                <li className="headerli3"> 
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/profil"> Profil </Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <ProfileMenu/>
            </ul>
        </nav>
    
        </header>
    )
}
export default Header