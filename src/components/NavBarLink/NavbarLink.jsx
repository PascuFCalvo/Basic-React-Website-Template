import "./NavbarLink.css";

export default function NavbarLink({ text, url }) {
    return (
        <a className="NavbarLink" href={url}>
            {text}
        </a>
    );
}
