import React from "react";

import ImgSoccer from "./assets/project-soccer.png";
import ImgHomeHub from "./assets/project-homehub.png";
import ImgBackend from "./assets/project-backend.jpg";
import ImgWIP from "./assets/project-wip.jpg"

const projects = [
    {
        name: "Soccer Betting Minigame",
        github: "https://github.com/NganPham89/Soccer-Betting-Mini-Game",
        url: "https://nganpham89.github.io/Soccer-Betting-Mini-Game/",
        img: ImgSoccer,
    },
    {
        name: "HomeHub",
        github: "https://github.com/Anabel-Espinoza/HomeHub",
        url: "https://home-hub-management.herokuapp.com/",
        img: ImgHomeHub,
    },
    {
        name: "Social Media Backend",
        github: "https://github.com/NganPham89/Social-Media-Backend",
        url: "https://drive.google.com/file/d/1g9E9XEskw892D4jTHvWod0xJI46kedqt/view",
        img: ImgBackend,
    },
    {
        name: "Work in Progress",
        github: "Coming Soon",
        url: "Coming Soon",
        img: ImgWIP,
    },
]

const Portfolio = () => {
    return (
        <div className="border border-2 border-warning">
            This is from Portfolio.
            <h2>This is a collection of my most notable projects.</h2>
            <div>
                {projects.map((project) => {
                    return (
                        <div>
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <h3>{project.name}</h3>
                            </a>
                            <a href={project.url} target="_blank" rel="noreferrer">
                                <img src={project.img} alt={project.name} width={200} />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;