import React from "react";
import LogoFB from "./assets/logo-fb.png";
import LogoGH from "./assets/logo-gh.png";
import LogoLI from "./assets/logo-li.png";

const contactObj = [
    {
        name: "GitHub",
        url: "https://github.com/NganPham89",
        icon: LogoGH,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ngan-pham-524351276/",
        icon: LogoLI,
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/",
        icon: LogoFB,
    }
]

const Footer = () => {
    return (
        <div className="border border-2 border-secondary">
            This is from Footer.
            <div>
                <ul>
                    {contactObj.map((contact) => {
                        return (
                            <li>
                                <a href={contact.url} target="_blank" rel="noreferrer">
                                    <img src={contact.icon} alt={contact.name} width={50}/>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Footer;