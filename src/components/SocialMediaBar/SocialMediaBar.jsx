import  { useState, useEffect } from "react";
import SocialsData from "../../data/socials.json";
import "./SocialMediaBar.css";

export default function SocialMediaBar() {
    const [socialIcons, setSocialIcons] = useState({});

    useEffect(() => {
        const loadIcons = async () => {
            const icons = {};
            for (const social of SocialsData.socials) {
                const icon = await import(`../../assets/socialIcons/${social.icon}`);
                icons[social.icon] = icon.default;
            }
            setSocialIcons(icons);
        };

        loadIcons();
    }, []);

    return (
        <div className="SocialMediaBar">
            {
                SocialsData.socials.map(social => (
                    <div className="socialIcon" key={social.title}>
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                            {socialIcons[social.icon] && (
                                <img src={socialIcons[social.icon]} alt={social.title} />
                            )}
                        </a>
                    </div>
                ))
            }
        </div>
    );
}
