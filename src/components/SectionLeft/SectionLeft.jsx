import "./SectionLeft.css";

export default function SectionLeft({ img1, text }) {
    return (
        <div className="SectionLeft">
            <img src={img1} alt="Image" />
            <div className="TextSectionLeft">
                <p>{text}</p>
            </div>
        </div>
    );
}
