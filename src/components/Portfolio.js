import React from "react";
import "./Header.css"

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
        <div className="post-body d-flex-row">
            <h2 className="font-os font-pink d-flex justify-content-center m-4">This is a collection of my most notable projects.</h2>
            <div className="d-lg-flex justify-content-evenly">
                {projects.map((project) => {
                    return (
                        <div className="d-flex-row mt-5 justify-content-center">
                            <a href={project.github} target="_blank" rel="noreferrer" className="nav-active d-flex justify-content-center">
                                <h3 className="font-os">{project.name}</h3>
                            </a>
                            <a href={project.url} target="_blank" rel="noreferrer" className="d-flex justify-content-center">
                                <img src={project.img} alt={project.name} width={300} className="border-blue"/>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio;