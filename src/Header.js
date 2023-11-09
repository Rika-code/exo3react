import ProfileMenu from "./ProfileMenu"

function Header () {
    return (
        <header className="header">
        <h1> Le blog de Rika, qui va pas être très beau </h1>
        <nav className="navbarheader">
            <ul className="headerul1">
                <li className="headerli1"> Acceuil</li>
                <li className="headerli2"> Home</li>
                <li className="headerli3"> Contact </li>
                <ProfileMenu/>
            </ul>
        </nav>
    
        </header>
    )
}
export default Header