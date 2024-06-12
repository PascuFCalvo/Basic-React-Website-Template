import "./SectionRight.css";

export default function SectionRight({ img1, text }) {
    return (
        <>
            <div className="SectionRight">
                <div className="TextSectionRight">
                    <p>{text}</p>
                </div>
                <img src={img1} alt="Google Logo" />
            </div>

        </>
    );
}
