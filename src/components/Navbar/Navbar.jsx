import "./Navbar.css";
import NavbarLink from "../NavBarLink/NavbarLink";
import NavbarData from "../../data/links.json";

export default function Navbar() {
    return (
        <nav className="Navbar">
            {NavbarData.navbar.map(link => (
                <NavbarLink key={link.id} text={link.title} url={link.url} target="_blank" rel="noopener noreferrer" />
            ))}
        </nav>
    )
}
