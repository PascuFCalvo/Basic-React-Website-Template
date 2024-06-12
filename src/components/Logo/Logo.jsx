import "./Logo.css";


export default function Logo({ alto, ancho }) {
    return (
        <div className="MainLogo">
            <img style={{ height: alto, width: ancho }} src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
        </div>

    )
}
